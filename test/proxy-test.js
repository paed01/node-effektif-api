'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Generator = require('../lib/generator');

nock.disableNetConnect();

lab.experiment('proxy', function() {
  var Mock, scope;

  lab.before(function(done) {
    var template = {
      basePath: 'http://testapi',
      apis: [{
        path: '/{organizationKey}/status',
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

    scope = nock(template.basePath);
    Mock = Generator('ProxyMock', template);
    done();
  });

  lab.test('proxies the request with authorization', function(done) {
    var mock = new Mock({
      authorization: 'auth-token'
    });
    scope
      .get('/testing-proxy/test-org/status')
      .matchHeader('authorization', 'auth-token')
      .reply(200);

    mock.proxy({
      method: 'GET',
      path: '/testing-proxy/test-org/status'
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(200);
      scope.done();
      done();
    });
  });

  lab.test('proxies the request to uri if defined', function(done) {
    var mock = new Mock({
      authorization: 'auth-token'
    });
    scope
      .get('/testing-proxy/test-org/status')
      .matchHeader('authorization', 'auth-token')
      .reply(200);

    mock.proxy({
      method: 'GET',
      uri: mock.options.basePath + '/testing-proxy/test-org/status'
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(200);
      scope.done();
      done();
    });
  });

  lab.test('HTTP method GET is default', function(done) {
    var mock = new Mock({
      authorization: 'auth-token'
    });
    scope
      .get('/testing-proxy/test-org/status')
      .matchHeader('authorization', 'auth-token')
      .reply(200);

    mock.proxy({
      path: '/testing-proxy/test-org/status'
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(200);
      scope.done();
      done();
    });
  });

  lab.test('returns error in callback', function(done) {
    var mock = new Mock({
      authorization: 'auth-token'
    });

    mock.proxy({
      uri: 'not-a-valid-uri'
    }, function(err) {
      expect(err).to.exist();
      done();
    });
  });

  lab.test('proxies the request without authorization if not defined', function(done) {
    var mock = new Mock();
    scope
      .put('/testing-proxy/test-org/without-auth')
      .reply(201);

    mock.proxy({
      method: 'PUT',
      path: '/testing-proxy/test-org/without-auth'
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(201);
      scope.done();
      done();
    });
  });

  lab.test('re-authenticates if call was unauthorized', function(done) {
    var mock = new Mock({
      users: {
        login: function(u, p, cb) {
          cb(null, {
            token: 'new-token'
          }, {
            statusCode: 200
          });
        }
      },
      credentials: {
        username: 'effektif-user',
        password: 'effektif-passw0rd'
      }
    });
    var pathname = '/testing-proxy/test-org/re-auth';
    scope
      .get(pathname)
      .reply(401, {
        message: 'Unauthorized'
      })
      .get(pathname)
      .matchHeader('authorization', 'new-token')
      .reply(200);

    mock.proxy({
      method: 'GET',
      path: pathname,
      authorization: true
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(200);
      scope.done();
      done();
    });
  });

  lab.test('returns error in callback authorization request failed', function(done) {
    var mock = new Mock({
      users: {
        login: function(u, p, cb) {
          return cb(new Error('Nope'));
        }
      },
      credentials: {
        username: 'effektif-user',
        password: 'effektif-passw0rd'
      }
    });

    scope
      .get('/proxy-me')
      .reply(401, {
        message: 'Unauthorized'
      });

    mock.proxy({
      path: '/proxy-me',
      authorization: true
    }, function(err) {
      expect(err).to.exist();
      done();
    });
  });

  lab.test('returns unauthorized if proxy authorization option is false', function(done) {
    var mock = new Mock({
      credentials: {
        username: 'effektif-user',
        password: 'effektif-passw0rd'
      }
    });

    scope
      .get('/proxy-me')
      .reply(401, {
        message: 'Unauthorized'
      });

    mock.proxy({
      path: '/proxy-me',
      authorization: false
    }, function(err, body, resp) {
      if (err) return done(err);
      expect(resp.statusCode).to.equal(401);
      scope.done();
      done();
    });
  });
});
