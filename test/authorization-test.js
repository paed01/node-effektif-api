'use strict';

var async = require('async');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var EventEmitter = require('events').EventEmitter;
var nock = require('nock');
var Processes = require('../.').Process;
var Tasks = require('../.').Task;

lab.experiment('Authorization', function() {
  var scope = nock(Processes.apiDoc.basePath);

  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.experiment('Expired token', function() {

    lab.test('Returns 401 in response', function(done) {
      var processes = new Processes({
        authorization: 'token'
      });

      scope.get('/test-org/processes?processIds=1%2C2')
        .reply(401, {
          message: 'Unauthorized'
        });

      processes.getProcesses('test-org', ['1', '2'], function(err, res) {
        if (err) return done(err);
        expect(res.statusCode).to.equal(401);
        done();
      });
    });

    lab.test('Issues new token if username and password are supplied', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=3%2C4')
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .reply(200, {
          token: 'new-token'
        })
        .get('/test-org/processes?processIds=3%2C4')
        .reply(200, []);

      processes.getProcesses('test-org', ['3', '4'], function(err, res) {
        if (err) return done(err);
        scope.done();
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    lab.test('Saves new token to instance', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          authorization: 'token',
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=new%2Ctoken')
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .reply(200, {
          token: 'newer-token'
        })
        .get('/test-org/processes?processIds=new%2Ctoken')
        .reply(200, []);

      processes.getProcesses('test-org', ['new', 'token'], function(err, res) {
        if (err) return done(err);
        scope.done();
        expect(res.statusCode).to.equal(200);
        expect(processes.defaults.authorization).to.equal('newer-token');
        done();
      });
    });

    lab.test('Responds with 401 if wrong username and password are supplied', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope.get('/test-org/processes?processIds=5%2C6')
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .reply(401, {
          message: 'Unauthorized'
        });

      processes.getProcesses('test-org', ['5', '6'], function(err, res) {
        expect(err).to.be.instanceof(Error);
        expect(res.statusCode).to.equal(401);
        scope.done();
        done();
      });
    });

    lab.test('Repeated unauthorized calls only calls login once', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(4)
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .delay(200)
        .reply(200, {
          token: 'repeat-new-token'
        })
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(4)
        .reply(200, []);

      async.times(4, function(n, next) {
        processes.getProcesses('test-org', ['repeated', 'token'], next);
      }, function(err) {
        if (err) return done(err);
        scope.done();
        done();
      });
    });

    lab.test('Repeated unauthorized calls with different modules only calls login once', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      var tasks = new Tasks({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .get('/test-org/tasks/1')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .delay(200)
        .reply(200, {
          token: 'module-new-token'
        })
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(200, [])
        .get('/test-org/tasks/1')
        .times(2)
        .reply(200, {
          id: 'unique-id'
        });

      async.times(4, function(n, next) {
        if (n % 2) return processes.getProcesses('test-org', ['repeated', 'token'], next);
        return tasks.getTask('test-org', '1', next);
      }, function(err) {
        if (err) return done(err);
        scope.done();

        expect(processes.defaults.authorization, 'processes token').to.equal('module-new-token');
        expect(tasks.defaults.authorization, 'tasks token').to.equal('module-new-token');

        done();
      });
    });

    lab.test('Repeated unauthorized calls with different users only calls login once per user', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      var tasks = new Tasks({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-admin',
          password: '@dmin-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .get('/test-org/tasks/1')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login').times(2)
        .delay(200)
        .reply(function(uri, requestBody) {
          var token = (/effektif-user/.test(requestBody) ? 'process-new-token' : 'tasks-new-token');
          return [200, JSON.stringify({
            token: token
          })];
        })
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(200, [])
        .get('/test-org/tasks/1')
        .times(2)
        .reply(200, {
          id: 'unique-id'
        });

      async.times(4, function(n, next) {
        if (n % 2) return processes.getProcesses('test-org', ['repeated', 'token'], next);
        return tasks.getTask('test-org', '1', next);
      }, function(err) {
        if (err) return done(err);
        scope.done();

        expect(processes.defaults.authorization, 'processes token').to.equal('process-new-token');
        expect(tasks.defaults.authorization, 'tasks token').to.equal('tasks-new-token');

        done();
      });
    });

    lab.test('New login emits authorized event once per user', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      var tasks = new Tasks({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-admin',
          password: '@dmin-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .get('/test-org/tasks/1')
        .times(2)
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login').times(2)
        .delay(200)
        .reply(function(uri, requestBody) {
          var token = (/effektif-user/.test(requestBody) ? 'process-event-token' : 'tasks-event-token');
          return [200, JSON.stringify({
            token: token
          })];
        })
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(2)
        .reply(200, [])
        .get('/test-org/tasks/1')
        .times(2)
        .reply(200, {
          id: 'unique-id'
        });

      var tokens = [];
      var pushToken = function(user) {
        tokens.push(user);
      };
      processes.on('authorized', pushToken);
      tasks.on('authorized', pushToken);

      async.times(4, function(n, next) {
        if (n % 2) return processes.getProcesses('test-org', ['repeated', 'token'], next);
        return tasks.getTask('test-org', '1', next);
      }, function(err) {
        if (err) return done(err);
        scope.done();

        processes.removeListener('authorized', pushToken);
        tasks.removeListener('authorized', pushToken);

        expect(processes.defaults.authorization, 'processes token').to.equal('process-event-token');
        expect(tasks.defaults.authorization, 'tasks token').to.equal('tasks-event-token');

        expect(tokens, 'authorized events').to.have.length(4);

        done();
      });
    });

    lab.test('Login error returns error in callback', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(4)
        .reply(401, {
          message: 'Unauthorized'
        });

      async.times(4, function(n, next) {
        processes.getProcesses('test-org', ['repeated', 'token'], next);
      }, function(err) {
        expect(err).to.exist();
        scope.done();
        done();
      });
    });

    lab.test('return error in callback if body is missing from login call', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope.get('/test-org/processes?processIds=5%2C6')
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .delay(200)
        .reply(200);

      processes.getProcesses('test-org', ['5', '6'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('No authorization token');
        scope.done();
        done();
      });
    });

    lab.test('return error in callback if body.token is missing from login call', function(done) {
      var processes = new Processes({
        authorization: 'token'
      }, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope.get('/test-org/processes?processIds=5%2C6')
        .reply(401, {
          message: 'Unauthorized'
        })
        .post('/users/login')
        .delay(200)
        .reply(200, {});

      processes.getProcesses('test-org', ['5', '6'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('No authorization token');
        scope.done();
        done();
      });
    });

  });

  lab.experiment('No default authorization token', function() {

    lab.test('First call is login', function(done) {
      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        }
      });

      scope
        .post('/users/login')
        .delay(200)
        .reply(200, {
          token: 'brand-new-token'
        })
        .get('/test-org/processes?processIds=repeated%2Ctoken')
        .times(4)
        .reply(200, []);

      async.times(4, function(n, next) {
        processes.getProcesses('test-org', ['repeated', 'token'], next);
      }, function(err) {
        if (err) return done(err);
        scope.done();
        done(err);
      });
    });

    lab.test('instance without credentials returns error', function(done) {
      var processes = new Processes({}, {});
      processes.getProcesses('test-org', ['repeated', 'token'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('Missing credentials');
        done();
      });
    });
  });

  lab.experiment('Custom user instance', function() {
    lab.test('Not inherited by EventEmitter works to', function(done) {
      scope
        .get('/test-org/processes?processIds=custom%2Clogin')
        .reply(200, []);

      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: {
          login: function(u, p, callback) {
            callback(null, {
              statusCode: 200
            }, {
              token: 'custom-token'
            });
          }
        }
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        if (err) return done(err);
        scope.done();
        done();
      });
    });

    lab.test('Custom login return without body returns error', function(done) {
      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: {
          login: function(u, p, callback) {
            callback(null, {
              statusCode: 200
            });
          }
        }
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('No authorization token');
        scope.done();
        done();
      });
    });

    lab.test('Custom login return without body.token returns error', function(done) {
      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: {
          login: function(u, p, callback) {
            callback(null, {
              statusCode: 200
            }, {});
          }
        }
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('No authorization token');
        scope.done();
        done();
      });
    });

    lab.test('Custom login with statusCode 401 returns error', function(done) {
      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: {
          login: function(u, p, callback) {
            callback(null, {
              statusCode: 401
            }, {});
          }
        }
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('Login failed with 401');
        scope.done();
        done();
      });
    });

    lab.test('Custom login error returns error', function(done) {
      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: {
          login: function(u, p, callback) {
            callback(new Error('Custom error'));
          }
        }
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        expect(err).to.be.instanceof(Error);
        expect(err.message).to.equal('Custom error');
        scope.done();
        done();
      });
    });

    lab.test('Custom login inherited from EventEmitter emits authorized', function(done) {
      var users = new EventEmitter();
      users.login = function(u, p, callback) {
        return callback(null, {
          statusCode: 200
        }, {
          token: 'emit-token'
        });
      };

      scope
        .get('/test-org/processes?processIds=custom%2Clogin')
        .reply(200, []);

      var processes = new Processes({}, {
        credentials: {
          username: 'effektif-user',
          password: 'effektif-passw0rd'
        },
        users: users
      });

      processes.once('authorized', function() {
        done();
      });

      processes.getProcesses('test-org', ['custom', 'login'], function(err) {
        if (err) return done(err);
        scope.done();
      });
    });
  });
});
