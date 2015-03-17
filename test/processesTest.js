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

nock.disableNetConnect();

lab.experiment('Process', function() {

  lab.experiment('#getProcesses', function() {
    lab.before(function(done) {
      /* jshint unused:false */
      nock(Processes.apiDoc.basePath)
        .get('/test-org/processes?processIds=1%2C2')
        .reply(200, 'OK');
      done();
    });

    lab.test('takes organizationKey and processIds as argument', function(done) {
      processes.getProcesses('test-org', ['1', '2'], done);
    });
    lab.test('returns error in callback if processIds is not an array', function(done) {
      processes.getProcesses('test-org', 1, function(err) {
        expect(err).to.exist();
        done();
      });
    });
  });
});
