'use strict';

var Lab = require('lab');
var lab = exports.lab = Lab.script();
var Code = require('code');
var expect = Code.expect;

var Api = require('../.');

lab.experiment('Api exports', function() {
  Object.keys(Api).forEach(function(api) {
    lab.experiment(api, function() {
      lab.test('functions', function(done) {
        expect(Api[api]).to.be.a.function();
        done();
      });

      lab.test('ctor throws if not instantiated with new', function(done) {
        function ctor() {
          Api[api]();
        }
        expect(ctor).to.throw(Error, api + ' must be instantiated using new');
        done();
      });

      lab.test('schemas', function(done) {
        expect(Api[api].schemas).to.be.an.object();
        done();
      });

      lab.test('have EventEmitter.on functions', function(done) {
        expect(Api[api].prototype.on).to.be.a.function();
        done();
      });

      lab.test('#getUserInstance returns new User instance', function(done) {
        var instance = new Api[api]();
        expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
        expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
        done();
      });
    });
  });
});
