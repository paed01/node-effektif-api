/* eslint no-console:0 */
'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const expect = require('code').expect;
const nock = require('nock');

lab.experiment('Logging', () => {
  let debugEnv = false;
  lab.before((done) => {
    debugEnv = process.env.DEBUG || false;
    delete require.cache[require.resolve('debug')];
    nock.disableNetConnect();
    done();
  });
  lab.after((done) => {
    if (debugEnv) {
      process.env.DEBUG = debugEnv;
    } else {
      delete process.env.DEBUG;
    }
    delete require.cache[require.resolve('debug')];
    nock.cleanAll();
    done();
  });

  lab.experiment('DEBUG', () => {
    lab.before((done) => {
      process.env.DEBUG = 'effektif-api:mock*';
      done();
    });

    lab.experiment('options log', () => {
      lab.test('outputs debug information to log function', (done) => {
        const Generator = require('../lib/generator');
        let template = {
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

        let msgs = [];
        let Mock = Generator('Mock', template, {
          log: function(msg) {
            msgs.push(msg);
          }
        });

        let mock = new Mock();

        mock.getProcesses('test-org', () => {
          expect(msgs.length).to.be.above(1, 'No messages');
          done();
        });
      });
    });

    lab.test('utilizes console.log if no log function is passed in options', (done) => {
      let consoleLog = console.log;

      let msgs = [];
      console.log = function(msg) {
        msgs.push(msg);
      };

      const Generator = require('../lib/generator');
      let template = {
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
      let Mock = Generator('Mock', template);
      let mock = new Mock();

      mock.getProcesses('test-org', () => {
        expect(msgs.length).to.be.above(1, 'No messages');
        console.log = consoleLog;
        done();
      });
    });
  });
});
