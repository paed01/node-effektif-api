'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Api = require('../.');

lab.experiment('Api exports', function() {
  lab.experiment('User', function() {
    lab.test('functions', function(done) {
      expect(Api.User).to.be.a.function();
      done();
    });

    lab.test('ctor throws if not instantiated with new', function(done) {
      function ctor() {
        Api.User();
      }
      expect(ctor).to.throw(Error, 'User must be instantiated using new');
      done();
    });

    lab.test('schemas', function(done) {
      expect(Api.User.schemas).to.be.an.object();
      done();
    });

    lab.test('#getUserInstance returns current instance', function(done) {
      var users = new Api.User();
      expect(users.getUserInstance()).to.equal(users);
      expect(users.getUserInstance().options.basePath, 'basePath').to.equal(users.options.basePath);
      done();
    });

    lab.test('#createRegistrationsActivate is renamed to activateRegistration', function(done) {
      var users = new Api.User();
      expect(users.activateRegistration, 'activateRegistration').to.be.a.function();
      done();
    });
  });

  lab.experiment('Task', function() {
    lab.test('functions', function(done) {
      expect(Api.Task).to.be.a.function();
      done();
    });

    lab.test('ctor throws if not instantiated with new', function(done) {
      function ctor() {
        Api.Task();
      }
      expect(ctor).to.throw(Error, 'Task must be instantiated using new');
      done();
    });

    lab.test('schemas', function(done) {
      expect(Api.Task.schemas).to.be.an.object();
      done();
    });

    lab.test('have utility functions', function(done) {
      expect(Api.Task.prototype.getFormFieldByName).to.be.a.function();
      done();
    });

    lab.test('have EventEmitter.on functions', function(done) {
      expect(Api.Task.prototype.on).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.Task();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
      done();
    });
  });

  lab.experiment('Process', function() {
    lab.test('functions', function(done) {
      expect(Api.Process).to.be.a.function();
      done();
    });

    lab.test('ctor throws if not instantiated with new', function(done) {
      function ctor() {
        Api.Process();
      }
      expect(ctor).to.throw(Error, 'Process must be instantiated using new');
      done();
    });

    lab.test('schemas', function(done) {
      expect(Api.Process.schemas).to.be.an.object();
      expect(Api.Process.schemas.getProcess.input).to.be.an.object();
      expect(Api.Process.schemas.getProcess.output).to.be.an.object();
      done();
    });

    lab.test('function deleteProcessActivity schema', function(done) {
      expect(Api.Process.schemas.deleteProcessActivity).to.be.an.object();
      done();
    });

    lab.test('have EventEmitter.on functions', function(done) {
      expect(Api.Process.prototype.on).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.Task();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
      done();
    });
  });

  lab.experiment('Service', function() {
    lab.test('function', function(done) {
      expect(Api.Service).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.Service();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
      done();
    });
  });

  lab.experiment('Search', function() {
    lab.test('function', function(done) {
      expect(Api.Search).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.Search();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
      done();
    });
  });

  lab.experiment('File', function() {
    lab.test('function', function(done) {
      expect(Api.File).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.File();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath).to.equal(instance.options.basePath);
      done();
    });
  });

  lab.experiment('ProcessInstance', function() {
    lab.test('function', function(done) {
      expect(Api.ProcessInstance).to.be.a.function();
      done();
    });

    lab.test('#getUserInstance returns new User instance', function(done) {
      var instance = new Api.ProcessInstance();
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      done();
    });

    lab.test('attached User instance shares basePath option', function(done) {
      var instance = new Api.ProcessInstance({
        basePath: 'http://mylocal.effektif.api'
      });
      expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
      expect(instance.getUserInstance().options.basePath).to.equal(instance.options.basePath);
      done();
    });

    lab.test('shares basePath with user instance', function(done) {
      var instance = new Api.Process({
        basePath: 'http://test.api',
        credentials: {
          username: 'kalle',
          password: 'anka'
        }
      });

      var scope = nock(instance.options.basePath);
      scope.post('/users/login')
        .reply(200, {
          token: 'new-token'
        })
        .get('/test-org/processes')
        .matchHeader('Authorization', 'new-token')
        .reply(200, []);

      instance.getProcesses('test-org', function(err) {
        if (err) return done(err);
        scope.done();
        done();
      });
    });
  });

  lab.experiment('Instance options', function() {

    lab.test('#ctor takes options', function(done) {
      var users = new Api.User();
      users.overridden = true;

      var instance = new Api.Process({
        users: users
      });

      expect(instance.getUserInstance()).to.include('overridden', true);
      done();
    });

    lab.test('#ctor overrides basePath option', function(done) {
      var instance = new Api.Process({
        basePath: 'http://mylocal.effektif.api'
      });

      expect(instance.options.basePath).to.equal('http://mylocal.effektif.api');
      done();
    });
  });

});
