'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

lab.experiment('Logging', function() {
  lab.before(function(done) {
    delete require.cache[require.resolve('debug')];
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.experiment('DEBUG', function() {
    var debugEnv;
    lab.before(function(done) {
      debugEnv = process.env.DEBUG;
      process.env.DEBUG = 'effektif-api:mock*';
      done();
    });
    lab.after(function(done) {
      if (debugEnv) {
        process.env.DEBUG = debugEnv;
      } else {
        delete process.env.DEBUG;
      }
      done();
    });

    lab.experiment('options log', function() {
      lab.test('outputs debug information to log function', function(done) {
        var Generator = require('../lib/generator');
        var template = {
          basePath: 'http://api.example.com',
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

        nock(template.basePath).get('/test-org/processes').reply(200);

        var msgs = [];
        var Mock = Generator('Mock', template, {
          log: function(msg) {
            msgs.push(msg);
          }
        });

        var mock = new Mock();

        mock.getProcesses('test-org', function() {
          expect(msgs.length).to.be.above(1, 'No messages');
          done();
        });
      });
    });

    lab.test('utilizes console.log if no log function is passed in options', function(done) {
      var consoleLog = console.log;

      var msgs = [];
      console.log = function(msg) {
        msgs.push(msg);
      };

      var Generator = require('../lib/generator');
      var template = {
        basePath: 'http://api.example.com',
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

      nock(template.basePath).get('/test-org/processes').reply(200);
      var Mock = Generator('Mock', template);
      var mock = new Mock();

      mock.getProcesses('test-org', function() {
        expect(msgs.length).to.be.above(1, 'No messages');
        console.log = consoleLog;
        done();
      });
    });
  });
});
