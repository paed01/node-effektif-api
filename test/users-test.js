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

lab.experiment('User', function() {
  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

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

  lab.experiment('#createUsersLogin', function() {
    lab.before(function(done) {
      /* jshint unused:false */
      nock(Users.apiDoc.basePath)
        .post('/users/login').times(2)
        .reply(200, 'OK');
      done();
    });

    lab.test('takes providerKey as argument', function(done) {
      users.createUsersLogin({
        mailAddress: 'test@truntail.local',
        password: 'supers3cret'
      }, done);
    });

    lab.test('does not require authentication token in header', function(done) {
      var userNoToken = new Users();
      userNoToken.createUsersLogin({
        mailAddress: 'test@truntail.local',
        password: 'supers3cret'
      }, done);
    });
  });

  lab.experiment('#login', function() {
    lab.before(function(done) {
      /* jshint unused:false */
      nock(Users.apiDoc.basePath)
        .post('/users/login').times(4)
        .reply(200, {
          token: 'OK'
        });
      done();
    });

    lab.test('takes username and password as argument', function(done) {
      users.login('test@truntail.local', 'supers3cret', done);
    });

    lab.test('does not require authentication token in header', function(done) {
      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', done);
    });

    lab.test('takes additional arguments', function(done) {
      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', {
        organizationKey: 'truntail'
      }, done);
    });

    lab.test('emits authorized event', function(done) {
      var userNoToken = new Users();
      userNoToken.once('authorized', function() {
        done();
      });
      userNoToken.login('test@truntail.local', 'supers3cret', {
        organizationKey: 'truntail'
      }, function() {});
    });
  });
});
