'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;

var Generator = require('../lib/generator');

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
      expect(Mock.prototype.applyDefaults).to.be.an.function();
      done();
    });

    lab.test('#applyDefaults retrieves headers from ctor options', function(done) {
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
        Authorization: 'token'
      });

      var args = mock.applyDefaults({ organizationKey: 'test' }, Mock.schemas.getProcesses.input);
      expect(args).to.include(['Authorization', 'organizationKey']);

      done();
    });

    lab.test('#applyDefaults accepts header options in lowerCase', function(done) {
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

      var args = mock.applyDefaults({ organizationKey: 'test' }, Mock.schemas.getProcesses.input);
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
  });
});
