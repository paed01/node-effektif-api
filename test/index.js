/* eslint func-style:0 */
'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;

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
  });

  lab.test('Service', function(done) {
    expect(Api.Service).to.be.a.function();
    done();
  });
  lab.test('Search', function(done) {
    expect(Api.Search).to.be.a.function();
    done();
  });
  lab.test('Service', function(done) {
    expect(Api.User).to.be.a.function();
    done();
  });
  lab.test('ProcessInstance', function(done) {
    expect(Api.ProcessInstance).to.be.a.function();
    done();
  });
});
