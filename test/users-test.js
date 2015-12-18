'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Users = require('../.').User;
var users = new Users({
  authorization: 'token'
});

lab.experiment('User', function() {
  var scope = nock(Users.apiDoc.basePath);

  lab.before(function(done) {
    nock.disableNetConnect();
    done();
  });
  lab.after(function(done) {
    nock.cleanAll();
    done();
  });

  lab.experiment('#createLogin', function() {
    lab.after(function(done) {
      scope.done();
      done();
    });

    lab.test('takes providerKey as argument', function(done) {
      scope
        .post('/login/provider-key-1')
        .reply(200, 'OK');

      users.createLogin('provider-key-1', {
        token: users.options.token
      }, done);
    });

    lab.test('does not require authentication token in header', function(done) {
      scope
        .post('/login/provider-key-2')
        .reply(200, 'OK');

      var userNoToken = new Users();
      userNoToken.createLogin('provider-key-2', {
        token: users.options.token
      }, done);
    });
  });

  lab.experiment('#createUsersLogin', function() {
    lab.after(function(done) {
      scope.done();
      done();
    });

    lab.test('takes providerKey as argument', function(done) {
      scope
        .post('/users/login')
        .reply(200, 'OK');

      users.createUsersLogin({
        emailAddress: 'test@truntail.local',
        password: 'supers3cret'
      }, done);
    });

    lab.test('does not require authentication token in header', function(done) {
      scope
        .post('/users/login')
        .reply(200, 'OK');

      var userNoToken = new Users();
      userNoToken.createUsersLogin({
        emailAddress: 'test@truntail.local',
        password: 'supers3cret'
      }, done);
    });
  });

  lab.experiment('#login', function() {
    lab.after(function(done) {
      scope.done();
      done();
    });

    lab.test('takes username and password as argument', function(done) {
      scope
        .post('/users/login')
        .reply(200, {
          token: 'OK'
        });

      users.login('test@truntail.local', 'supers3cret', done);
    });

    lab.test('does not require authentication token in header', function(done) {
      scope
        .post('/users/login')
        .reply(200, {
          token: 'OK'
        });

      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', done);
    });

    lab.test('takes additional arguments', function(done) {
      scope
        .post('/users/login')
        .reply(200, {
          token: 'OK'
        });

      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', {
        organizationKey: 'truntail'
      }, done);
    });

    lab.test('takes empty additional arguments', function(done) {
      scope
        .post('/users/login')
        .reply(200, {
          token: 'OK'
        });

      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', {}, done);
    });

    lab.test('emits authorized event', function(done) {
      scope
        .post('/users/login')
        .reply(200, {
          token: 'OK'
        });

      var userNoToken = new Users();
      userNoToken.once('authorized', function() {
        done();
      });
      userNoToken.login('test@truntail.local', 'supers3cret', {
        organizationKey: 'truntail'
      }, function() {});
    });

    lab.test('returns error in callback if unsuccessfull', function(done) {
      scope
        .post('/users/login')
        .reply(404, {
          message: 'Not found'
        });

      var userNoToken = new Users();
      userNoToken.login('test@truntail.local', 'supers3cret', {
        organizationKey: 'truntail'
      }, function(err, body, resp) {
        expect(err).to.be.instanceof(Error);
        expect(resp, 'HTTP response').to.exist();
        expect(resp.statusCode).to.equal(404);
        done();
      });
    });
  });
});
