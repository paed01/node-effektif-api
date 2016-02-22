'use strict';

const Lab = require('lab');
const lab = exports.lab = Lab.script();
const Code = require('code');
const expect = Code.expect;

const Api = require('../.');

lab.experiment('Api exports', () => {
  Object.keys(Api).forEach((api) => {
    lab.experiment(api, () => {
      lab.test('functions', (done) => {
        expect(Api[api]).to.be.a.function();
        done();
      });

      lab.test('ctor throws if not instantiated with new', (done) => {
        function ctor() {
          Api[api]();
        }
        expect(ctor).to.throw(Error, api + ' must be instantiated using new');
        done();
      });

      lab.test('schemas', (done) => {
        expect(Api[api].schemas).to.be.an.object();
        done();
      });

      lab.test('have EventEmitter.on functions', (done) => {
        expect(Api[api].prototype.on).to.be.a.function();
        done();
      });

      lab.test('#getUserInstance returns new User instance', (done) => {
        const instance = new Api[api]();
        expect(instance.getUserInstance()).to.be.instanceOf(Api.User);
        expect(instance.getUserInstance().options.basePath, 'basePath').to.equal(instance.options.basePath);
        done();
      });
    });
  });
});
