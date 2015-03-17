'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;

var Api = require('../.');

lab.experiment('Api exports', function() {
  lab.test('User', function(done) {
    expect(Api.User).to.be.a.function();
    done();
  });
  lab.test('Task', function(done) {
    expect(Api.Task).to.be.a.function();
    done();
  });
  lab.experiment('Process', function() {
    lab.test('functions', function(done) {
      expect(Api.Process).to.be.a.function();
      done();
    });
    lab.test('schemas', function(done) {
      expect(Api.Process.schemas).to.be.an.object();
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
