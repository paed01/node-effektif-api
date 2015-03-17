'use strict';

var docs = require('../api/docs.json');
var Generator = require('./generator');

docs.apis.forEach(function(d) {
    var name = d.path.replace('/', '');
    module.exports[name] = Generator(name, '../api/' + name + '.json');
});
