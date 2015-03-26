/* eslint func-style:0 */
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

lab.experiment('Tasks', function() {
  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.test('emits error if no arguments is passed to function', function(done) {
    tasks.once('error', function(err) {
      expect(err).to.be.instanceof(Error);
      done();
    });

    tasks.createTasks();
  });

  lab.experiment('#getTask', function() {
    lab.before(function(done) {
      nock(Tasks.apiDoc.basePath)
        .get('/test-org/tasks/1').times(2)
        .reply(200, {
          id: 'unique-id'
        });
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

    lab.test('returns body in callback that valides output schema', function(done) {
      tasks.getTask('test-org', '1', function(err, resp, body) {
        expect(err).to.not.exist();
        expect(body).to.be.an.object();
        Tasks.schemas.getTask.output.validate(body, done);
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

  lab.experiment('#updateTaskFormField', function() {
    lab.test('FormField schema complete', function(done) {
      var input = {
        id: '23',
        binding: {
          converter: 'mu'
        },
        value: 'new name',
        type: {}
      };

      Tasks.models.FormField.validate(input, done);
    });

    lab.test('FormField schema value only', function(done) {
      var input = {
        value: 'new name'
      };

      Tasks.models.FormField.validate(input, done);
    });

    lab.before(function(done) {
      /* jshint unused:false */
      nock(Tasks.apiDoc.basePath)
        .filteringRequestBody(function(path) {
          return '*';
        })
        .put('/test-org/tasks/1/form/fields/23')
        .reply(200, {
          form: {
            fields: [{
              id: '23',
              name: 'Name',
              value: 'my name',
              type: {}
            }]
          }
        });
      done();
    });

    lab.test('takes organizationKey, taskId, and fieldId as argument', function(done) {
      tasks.updateTaskFormField('test-org', '1', '23', {
        id: '23',
        binding: {
          converter: 'mu'
        },
        value: 'new name',
        type: {}
      }, done);
    });
  });

  lab.experiment('#getFormFieldByName', function() {
    var taskData = {
      form: {
        fields: [{
          id: '23',
          name: 'Name',
          value: 'my name',
          type: {}
        }]
      }
    };

    lab.test('when argument is TaskXL it returns field', function(done) {
      var f = tasks.getFormFieldByName(taskData, 'Name');
      expect(f).to.exist();
      expect(f.id).to.equal('23');
      done();
    });

    lab.test('returns null if field name not found', function(done) {
      var f = tasks.getFormFieldByName(taskData, 'no');
      expect(f).to.equal(null);
      done();
    });

    lab.test('returns null if task.form is undefined', function(done) {
      var f = tasks.getFormFieldByName({}, 'no');
      expect(f).to.equal(null);
      done();
    });
  });
});
