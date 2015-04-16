'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Processes = require('../.').Process;
var processes = new Processes({
  authorization: 'token'
});



lab.experiment('Process', function() {
  var scope = nock(Processes.apiDoc.basePath);
  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.experiment('#getProcesses', function() {
    lab.test('takes organizationKey and processIds as argument', function(done) {
      scope.get('/test-org/processes?processIds=1%2C2')
        .reply(200, []);
      processes.getProcesses('test-org', ['1', '2'], done);
    });
    lab.test('returns error in callback if processIds is not an array', function(done) {
      processes.getProcesses('test-org', 1, function(err) {
        expect(err).to.exist();
        done();
      });
    });

    lab.test('takes null as processIds since query strings are considered optional', function(done) {
      scope.get('/test-org/processes')
        .reply(200, [{
          id: 'f15',
          activitiesOrder: ['f19'],
          name: 'Test effektif API 1',
          organizationId: 'f34',
          processId: 'f15',
          caseColumnsOrder: ['f27', 'f28', 'f29', 'f2a'],
          diagram: {},
          lastUpdated: '2015-04-01T22:25:38.125Z',
          ownerId: 'f35',
          published: true
        }, {
          id: 'f82',
          activitiesOrder: ['f83'],
          name: 'Test effektif API 2',
          organizationId: 'f34',
          processId: 'f82',
          changed: true,
          diagram: {},
          lastUpdated: '2015-01-10T10:26:00.738Z',
          ownerId: 'f35',
          published: false
        }]);

      processes.getProcesses('test-org', null, function(err, resp, body) {
        if (err) return done(err);
        expect(body).to.have.length(2);
        done();
      });
    });

    lab.test('takes undefined as processIds since query strings are considered optional', function(done) {
      scope.get('/test-org/processes')
        .reply(200, [{
          id: 'f15',
          activitiesOrder: ['f19'],
          name: 'Test effektif API 1',
          organizationId: 'f34',
          processId: 'f15',
          caseColumnsOrder: ['f27', 'f28', 'f29', 'f2a'],
          diagram: {},
          lastUpdated: '2015-04-01T22:25:38.125Z',
          ownerId: 'f35',
          published: true
        }]);

      processes.getProcesses('test-org', undefined, function(err, resp, body) {
        if (err) return done(err);
        expect(body).to.have.length(1);
        done();
      });
    });
  });
});
