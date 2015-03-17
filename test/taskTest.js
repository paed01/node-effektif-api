'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Tasks = require('../.').Task;
var tasks = new Tasks({
  authorization: 'token'
});

nock.disableNetConnect();

lab.experiment('Tasks', function() {

  lab.experiment('#getTask', function() {
    lab.before(function(done) {
      nock(Tasks.apiDoc.basePath)
        .get('/test-org/tasks/1')
        .reply(200, 'OK');
      done();
    });

    lab.test('takes organizationKey and taskId as argument', function(done) {
      tasks.getTask('test-org', '1', done);
    });
    lab.test('returns error in callback if taskId is not a string', function(done) {
      tasks.getTask('test-org', {}, function(err) {
        expect(err).to.exist();
        done();
      });
    });
    lab.test('returns error in callback if authorization token is missing', function(done) {
      var newTasks = new Tasks();
      newTasks.getTask('test-org', '1', function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });

  lab.experiment('#getTaskNext', function() {
    lab.before(function(done) {
      nock(Tasks.apiDoc.basePath)
        .get('/test-org/tasks/1/next')
        .reply(200, 'OK');
      done();
    });

    lab.test('takes organizationKey and taskId as argument', function(done) {
      tasks.getTaskNext('test-org', '1', done);
    });
    lab.test('returns error in callback if taskId is not a string', function(done) {
      tasks.getTaskNext('test-org', {}, function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });

  lab.experiment('#createTasks', function() {
    lab.before(function(done) {
      /* jshint unused:false */
      nock(Tasks.apiDoc.basePath)
        .filteringRequestBody(function(path) {
          return '*';
        })
        .post('/test-org/tasks')
        .reply(200, 'OK');
      done();
    });

    lab.test('takes organizationKey and task as argument', function(done) {
      tasks.createTasks('test-org', {
        processId: '1'
      }, done);
    });

    lab.test('returns error in callback if task.isPrivate is not a boolean', function(done) {
      tasks.createTasks('test-org', {
        isPrivate: 'nej'
      }, function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });
});
