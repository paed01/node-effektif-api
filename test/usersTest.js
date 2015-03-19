'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
// var Code = require('code');
// var expect = Code.expect;
var nock = require('nock');

var Users = require('../.').User;
var users = new Users({
  authorization: 'token'
});

nock.disableNetConnect();

lab.experiment('User', function() {

  lab.experiment('#createLogin', function() {
    lab.before(function(done) {
      /* jshint unused:false */
      nock(Users.apiDoc.basePath)
        .post('/login/provider-key').times(2)
        .reply(200, 'OK');
      done();
    });

    lab.test('takes providerKey as argument', function(done) {
      users.createLogin('provider-key', {
        token: users.options.token
      }, done);
    });

    lab.test('does not require authentication token in header', function(done) {
      var userNoToken = new Users();
      userNoToken.createLogin('provider-key', {
        token: users.options.token
      }, done);
    });
  });
});
