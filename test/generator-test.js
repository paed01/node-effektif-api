/* eslint no-underscore-dangle:0 curly:0 */
'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Generator = require('../lib/generator');

nock.disableNetConnect();

lab.experiment('Generator', function() {

  lab.experiment('#generate', function() {
    lab.test('returns Module', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      expect(Mock).to.be.a.function();
      expect(Mock.prototype).to.be.an.object();
      expect(Mock.prototype.getProcesses).to.be.an.function();
      done();
    });

    lab.test('returns Module with function applyDefaults', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      expect(Mock).to.be.a.function();
      expect(Mock.prototype).to.be.an.object();
      expect(Mock.prototype._applyDefaults).to.be.a.function();
      done();
    });

    lab.test('returns Module with function that contains input and output schema', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            type: 'Simple',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {
          Simple: {
            id: 'Simple',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        }
      };
      var Mock = Generator('Mock', template);
      expect(Mock.prototype.getProcesses).to.be.an.function();
      var mock = new Mock();

      expect(mock.getProcesses).to.be.a.function();
      expect(mock.getProcesses.schemas).to.be.an.object();
      expect(mock.getProcesses.schemas.input).to.be.an.object();
      expect(mock.getProcesses.schemas.output).to.be.an.object();
      done();
    });

    lab.test('#_applyDefaults retrieves headers from ctor options', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'Authorization',
              paramType: 'header',
              dataType: 'string'
            }, {
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      var mock = new Mock({
        authorization: 'token'
      });

      var args = mock._applyDefaults({
        organizationKey: 'test'
      }, Mock.schemas.getProcesses.input);
      expect(args).to.include(['Authorization', 'organizationKey']);

      done();
    });

    lab.test('#_applyDefaults accepts header options in lowerCase', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'Authorization',
              paramType: 'header',
              dataType: 'string'
            }, {
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      var mock = new Mock();

      // Set deafults
      mock.defaults = {
        Authorization: 'token'
      };

      var args = mock._applyDefaults({
        organizationKey: 'test'
      }, Mock.schemas.getProcesses.input);

      expect(args).to.include(['Authorization', 'organizationKey']);
      done();
    });
  });

  lab.experiment('function names', function() {

    lab.test('returns second endpoint part with capitalized letter', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes/{processId}/tasks',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }, {
              name: 'processId',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      expect(Mock.prototype.getProcessTasks).to.be.an.function();
      done();
    });

    lab.test('endpoint with empty section part is ignored', function(done) {
      var template = {
        apis: [{
          path: '/bad//path',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }, {
              name: 'processId',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      expect(Mock.prototype.getBadPath).to.be.an.function();
      done();
    });
  });

  lab.experiment('function arguments', function() {
    lab.test('ignores argument type if not a header, path, or body', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes/{processId}/tasks',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }, {
              name: 'processId',
              paramType: 'path',
              dataType: 'string'
            }, {
              name: 'obscureParm',
              paramType: 'ignored',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };
      var Mock = Generator('Mock', template);
      var inputSchema = Mock.schemas.getProcessTasks.input.describe();

      expect(Object.keys(inputSchema.children).length).to.equal(3);
      expect(inputSchema.children).to.include(['organizationKey', 'processId', 'callback']);

      done();
    });
  });

  lab.experiment('Models', function() {

    lab.test('with properties returns Joi.object with children', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            type: 'Simple',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {
          Simple: {
            id: 'Simple',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        }
      };
      var Mock = Generator('Mock', template);
      expect(Mock.schemas.getProcesses.output.describe().children).to.be.an.object();
      done();
    });

    lab.test('with Authorization header returns schema with requiresAuthorization tag', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            type: 'Simple',
            parameters: [{
              name: 'Authorization',
              paramType: 'header',
              dataType: 'string'
            }, {
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {
          Simple: {
            id: 'Simple',
            properties: {
              name: {
                type: 'string'
              }
            }
          }
        }
      };
      var Mock = Generator('Mock', template);
      expect(Mock.schemas.getProcesses.output.describe().children).to.be.an.object();
      done();
    });

    lab.test('without properties returns Joi.object', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            type: 'Empty',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {
          Empty: {
            id: 'Empty'
          }
        }
      };
      var Mock = Generator('Mock', template);
      expect(Mock.schemas.getProcesses.output).to.be.an.object();
      done();
    });

    lab.test('with undefined Joi type throws', function(done) {
      var template = {
        apis: [{
          path: '/{organizationKey}/processes',
          operations: [{
            method: 'GET',
            type: 'UnkownType',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {
          UnkownType: {
            id: 'UnkownType',
            properties: {
              name: {
                type: '_undefined-type'
              }
            }
          }
        }
      };

      function fn() {
        Generator('Mock', template);
      }
      expect(fn).to.throw(Error, 'Joi type "_undefined-type" not found');
      done();
    });

    lab.describe('array', function() {

      lab.test('item type is validated', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'List1',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            List1: {
              id: 'List1',
              properties: {
                a: {
                  type: 'array',
                  items: {
                    $ref: 'string'
                  }
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);

        Mock.schemas.getProcesses.output.validate({
          a: ['test']
        }, done);
      });

      lab.test('with invalid item type returns error', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'List2',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            List2: {
              id: 'List2',
              properties: {
                a: {
                  type: 'array',
                  items: {
                    $ref: 'string'
                  }
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);
        Mock.schemas.getProcesses.output.validate({
          a: [{}]
        }, function(err) {
          expect(err).to.exist();
          done();
        });
      });

      lab.test('without item type validates to any', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'List3',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            List3: {
              id: 'List3',
              properties: {
                a: {
                  type: 'array'
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);
        Mock.schemas.getProcesses.output.validate({
          a: [{}]
        }, done);
      });

      lab.test('with complex item type validates', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'ComplexList1',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            Complex1: {
              id: 'Complex1',
              properties: {
                b: {
                  type: 'Long'
                }
              }
            },
            ComplexList1: {
              id: 'ComplexList1',
              properties: {
                a: {
                  type: 'array',
                  items: {
                    $ref: 'Complex1'
                  }
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);
        Mock.schemas.getProcesses.output.validate({
          a: [{
            b: 1
          }]
        }, done);
      });

      lab.test('with complex item type validation returns error if incorrect', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'ComplexList1',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            Complex1: {
              id: 'Complex1',
              properties: {
                b: {
                  type: 'Long'
                }
              }
            },
            ComplexList1: {
              id: 'ComplexList1',
              properties: {
                a: {
                  type: 'array',
                  items: {
                    $ref: 'Complex1'
                  }
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);
        Mock.schemas.getProcesses.output.validate({
          a: [{
            b: 'NaN'
          }]
        }, function(err) {
          expect(err).to.exist();
          done();
        });
      });

      lab.test('with circular complex item type validates any (TODO: not optimal)', function(done) {
        var template = {
          apis: [{
            path: '/{organizationKey}/processes',
            operations: [{
              method: 'GET',
              type: 'CircularList1',
              parameters: [{
                name: 'organizationKey',
                paramType: 'path',
                dataType: 'string'
              }]
            }]
          }],
          models: {
            Complex2: {
              id: 'Complex2',
              properties: {
                children: {
                  type: 'Complex2'
                }
              }
            },
            CircularList1: {
              id: 'CircularList1',
              properties: {
                a: {
                  type: 'array',
                  items: {
                    $ref: 'Complex2'
                  }
                }
              }
            }
          }
        };
        var Mock = Generator('Mock', template);
        Mock.schemas.getProcesses.output.validate({
          a: [{
            children: [{}, function() {}]
          }]
        }, done);
      });

    });
  });

  lab.test('GET that returns non-object returns body un-altered', function(done) {
    var template = {
      basePath: 'http://testapi',
      apis: [{
        path: '/{organizationKey}/status',
        operations: [{
          method: 'GET',
          parameters: [{
            name: 'organizationKey',
            paramType: 'path',
            dataType: 'string'
          }]
        }]
      }],
      models: {}
    };
    nock(template.basePath)
      .get('/test-org/status')
      .reply(200, 'OK');

    var Mock = Generator('Mock', template);
    var mock = new Mock();
    mock.getStatus('test-org', function(err, resp, body) {
      expect(err).to.not.exist();
      expect(body).to.be.a.string();
      expect(body).to.equal('OK');
      done();
    });
  });

  lab.describe('options.log', function() {

    lab.test('uses console if not defined', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/status',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      nock(template.basePath)
        .get('/test-org/status')
        .reply(200, 'OK');

      /* eslint no-unused-vars:0 */
      var Mock = Generator('Mock', template);
      var mock = new Mock({});

      // expect(mock.log).to.equal(console);
      done();
    });

    lab.test('sets log function on generated interface', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/status',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var log = function() {
        return 'weee';
      };

      nock(template.basePath)
        .get('/test-org/status')
        .reply(200, 'OK');

      var Mock = Generator('Mock', template, {
        log: log
      });
      var mock = new Mock();

      expect(mock._debug.log()).to.equal('weee');
      expect(mock._debugError.log()).to.equal('weee');
      done();
    });

    lab.test('can be passed to generated interface via options', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/status',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var log = function() {
        return 'true that';
      };

      nock(template.basePath)
        .get('/test-org/status')
        .reply(200, 'OK');

      var Mock = Generator('Mock', template);
      var mock = new Mock({
        log: log
      });

      expect(mock._debug.log()).to.equal('true that');
      expect(mock._debugError.log()).to.equal('true that');
      done();
    });
  });

  lab.experiment('function callback response', function() {
    lab.test('operation without return type but responds with content-type application/json returns json as body', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var Mock = Generator('Mock', template);
      var mock = new Mock();

      nock(template.basePath)
        .get('/test-org/test')
        .reply(200, {
          test: true
        }, {
          'content-type': 'application/json'
        });

      mock.getTest('test-org', function(err, resp, body) {
        if (err) return done(err);
        expect(body).to.deep.equal({
          test: true
        });
        done();
      });

    });

    lab.test('operation responds with content-type application/json but bad json returns error', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var Mock = Generator('Mock', template);
      var mock = new Mock();

      nock(template.basePath)
        .get('/test-org/test')
        .reply(200, 'OK', {
          'content-type': 'application/json'
        });

      mock.getTest('test-org', function(err) {
        expect(err).to.exist();
        done();
      });

    });

    lab.test('operation failure returns error in callback', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var Mock = Generator('Mock', template);
      var mock = new Mock();

      mock.getTest('test-org', function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });

  lab.experiment('#_getUserInstance', function() {

    lab.test('throws if not overridden by module', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var Mock = Generator('Mock', template);
      var mock = new Mock();

      expect(function() {
        mock._getUserInstance();
      }).to.throw('User interface is not loaded');

      done();
    });

    lab.test('takes options.users', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var users = {
        name: 'overridden users',
        login: function() {}
      };

      var Mock = Generator('Mock', template);
      var mock = new Mock({
        users: users
      });
      expect(mock._getUserInstance(), 'getUserInstance').to.equal(users);
      done();
    });

    lab.test('throws if options.users is not an object', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var users = function() {};

      var Mock = Generator('Mock', template);

      expect(function() {
        new Mock({
          users: users
        });
      }).to.throw(/must be an object/i);
      done();
    });

    lab.test('throws if options.users is missing login function', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      var users = {};

      var Mock = Generator('Mock', template);

      expect(function() {
        new Mock({
          users: users
        });
      }).to.throw(/login/i);
      done();
    });
  });

  lab.experiment('#onUnauthorized', function() {

    lab.test('override instance function', function(done) {
      var template = {
        basePath: 'http://testapi',
        apis: [{
          path: '/{organizationKey}/test',
          operations: [{
            method: 'GET',
            parameters: [{
              paramType: 'header',
              name: 'Authorization',
              description: 'The authentication token can be obtained from /users/login.',
              dataType: 'string',
              required: true
            }, {
              name: 'organizationKey',
              paramType: 'path',
              dataType: 'string'
            }]
          }]
        }],
        models: {}
      };

      nock(template.basePath)
        .get('/test-org/test')
        .reply(401, 'OK');

      var Mock = Generator('Mock', template);
      var mock = new Mock({
        authorization: 'token',
        credentials: {
          username: 'a',
          password: 'b'
        },
        users: {
          login: function() {}
        },
        onUnauthorized: function(reqOpt, callback) {
          done();
        }
      });

      mock.getTest('test-org', function(err, resp, body) {
        expect(err).to.not.exist();
      });

    });
  });
});
