/*eslint curly:0 */
'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Workflow = require('../.').Workflow;
var workflows = new Workflow({
  authorization: 'token'
});

lab.experiment('Workflow', function() {
  var scope = nock(Workflow.apiDoc.basePath);
  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.experiment('#getWorkflow', function() {
    lab.test('takes organizationKey and offset as argument', function(done) {
      scope.get('/test-org/workflows?offset=1')
        .reply(200, []);
      workflows.getWorkflows('test-org', 1, done);
    });

    lab.test('returns error in callback if offset is not a number', function(done) {
      workflows.getWorkflows('test-org', 'off', function(err) {
        expect(err).to.exist();
        done();
      });
    });

    lab.test('takes null as offset since query strings are considered optional', function(done) {
      scope.get('/test-org/workflows')
        .reply(200, {});

      workflows.getWorkflows('test-org', null, function(err, body, resp) {
        if (err) return done(err);
        expect(resp, 'HTTP response').to.exist();
        done();
      });
    });

    lab.test('takes undefined as offset since query strings are considered optional', function(done) {
      scope.get('/test-org/workflows')
        .reply(200, {});

      workflows.getWorkflows('test-org', undefined, function(err, body, resp) {
        if (err) return done(err);
        expect(resp, 'HTTP response').to.exist();
        done();
      });
    });
  });
});
