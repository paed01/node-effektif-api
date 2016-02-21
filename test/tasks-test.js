'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Generator = require('../lib/generator');

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
      tasks.getTask('test-org', '1', function(err, body, resp) {
        expect(err).to.not.exist();
        expect(body).to.be.an.object();
        expect(resp).to.be.an.object();
        Tasks.schemas.getTask.output.validate(body, done);
      });
    });
  });

  lab.experiment('#createTasks', function() {
    lab.before(function(done) {
      nock(Tasks.apiDoc.basePath)
        .post('/test-org/tasks')
        .reply(200, 'OK');
      done();
    });

    lab.test('takes organizationKey and task as argument', function(done) {
      tasks.createTasks('test-org', {
        workflowId: '1'
      }, done);
    });

    lab.test('returns error in callback if task.canceled is not a boolean', function(done) {
      tasks.createTasks('test-org', {
        canceled: 'nej'
      }, function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });

  lab.experiment('#updateTaskFormField', function() {
    lab.test('FormInstanceField schema complete', function(done) {
      var input = {
        id: '23',
        value: 'new name',
        type: {}
      };

      Tasks.models.FormInstanceField.validate(input, done);
    });

    lab.test('FormInstanceField schema value only', function(done) {
      var input = {
        value: 'new name'
      };

      Tasks.models.FormInstanceField.validate(input, done);
    });

    lab.test('takes organizationKey, taskId, and fieldId as argument', function(done) {
      nock(Tasks.apiDoc.basePath)
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

      tasks.updateTaskFormField('test-org', '1', '23', {
        id: '23',
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

  lab.experiment('override', function() {
    var taskTemplate = {
      apis: [{
        path: '/{organizationKey}/tasks/{taskId}/complete',
        operations: [{
          method: 'POST',
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

    lab.test('/{organizationKey}/tasks/{taskId}/complete is named completeTask', function(done) {
      var Task = Generator('Task', taskTemplate);
      expect(Task.prototype.completeTask).to.exist();
      done();
    });
  });

  lab.experiment('#completeTask', function() {
    lab.test('accepts object with form', function(done) {
      nock(Tasks.apiDoc.basePath)
        .post('/test-org-1/tasks/task-1/complete')
        .reply(200, {});

      tasks.completeTask('test-org-1', 'task-1', {
        form: {
          fields: [{
            id: '11',
            value: 'test'
          }]
        }
      }, done);
    });

    lab.test('accepts empty body properties', function(done) {
      nock(Tasks.apiDoc.basePath)
        .post('/test-org-1/tasks/task-1/complete')
        .reply(200, {});

      tasks.completeTask('test-org-1', 'task-1', {
        description: '',
        form: {
          fields: [{
            id: '11',
            value: 'test'
          }]
        }
      }, done);
    });

    lab.test('accepts body properties not defined', function(done) {
      nock(Tasks.apiDoc.basePath)
        .post('/test-org-1/tasks/task-1/complete')
        .reply(200, {});

      tasks.completeTask('test-org-1', 'task-1', {
        candidateGroups: [],
        form: {
          fields: [{
            id: '11',
            value: 'test'
          }]
        }
      }, done);
    });
  });
});
