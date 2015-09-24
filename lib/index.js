'use strict';

var docs = require('../api/docs.json');
var Generator = require('./generator');

var interfaces = {};

docs.apis.forEach(function(d) {
  var name = d.path.replace('/', '');
  interfaces[name] = Generator(name, '../api/' + name + '.json');
});

// Add User interface callback to interfaces
Object.keys(interfaces).forEach(function(key) {
  if (key === 'User') {
    interfaces[key].prototype._getUserInstance = function() {
      return this;
    };
    return;
  };

  interfaces[key].prototype._getUserInstance = function(defaults, options) {
    if (this.options.users) return this.options.users;
    return new interfaces.User(defaults, options);
  };
});

module.exports = interfaces;
