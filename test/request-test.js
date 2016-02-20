/* eslint no-underscore-dangle:0, curly:0, no-new:0 */
'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;
var nock = require('nock');

var Generator = require('../lib/generator');

nock.disableNetConnect();

lab.experiment('Requests', function() {
  lab.test('GET that returns 400 with non-object returns error with 400', function(done) {
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

    nock(template.basePath)
      .get('/test-org/status')
      .reply(401, {
        message: 'Unauthorized'
      }, {
        'Content-Type': 'application/json'
      });

    var Mock = Generator('Mock', template);
    var mock = new Mock();
    mock.getStatus('test-org', function(err, body, resp) {
      expect(err).to.exist();
      expect(err.message).to.contain('Unauthorized');
      expect(resp.statusCode).to.equal(401);
      done();
    });
  });
});
