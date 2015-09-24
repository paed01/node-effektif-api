'use strict';

var Api = require('../');
var util = require('util');

console.log('API\n===\n');

function printToc() {
  console.log('Table of contents');

  Object.keys(Api).forEach(function(name) {
    console.log('-', '[' + name + '](#' + name.toLowerCase() + ')');

    var Intfc = Api[name];

    // var inst = new Intfc();
    var protos = Object.keys(Intfc.prototype);

    protos.forEach(function(fname) {
      if (fname !== 'log' && fname.indexOf('_') !== 0) {
        console.log('  -', '[`' + fname + '`](#' + name.toLowerCase() + '-' + fname.toLowerCase() + ')');
      }
    });
  });
}

function printSchema(schema, interfaceName, padding) {
  var descr = schema.describe ? schema.describe() : schema;
  var children = descr.children;
  if (!padding) padding = '';

  // console.log(util.inspect(descr, false, null))

  Object.keys(children).forEach(function(name) {
    var child = children[name];
    var meta = child.meta && child.meta[0];

    if (meta && meta.header) {
      return;
    }

    var required = (child.flags && child.flags.presence === 'required') || (meta && meta.path);
    var originalType = child.label;

    process.stdout.write(util.format('\n%s- `%s`:', padding, name));

    if (required) process.stdout.write(util.format(' required'));

    process.stdout.write(util.format(' %s', child.type));

    if (originalType) process.stdout.write(util.format(' [%s](#%s-%s)', originalType, interfaceName.toLowerCase(), originalType.toLowerCase()));
    if (child.description) process.stdout.write(util.format(' - %s', child.description));

    if (child.children && Object.keys(child.children).length > 0) {
      printSchema(child, interfaceName, '  ');
    }
  });
}

function printFunctions() {
  Object.keys(Api).forEach(function(name) {
    console.log('\n#', name);

    var Intfc = Api[name];

    // var inst = new Intfc();

    // console.log(Intfc.prototype)

    var protos = Object.keys(Intfc.prototype);

    protos.forEach(function(fname) {
      var proto = Intfc.prototype[fname];
      if (fname !== 'log' && fname.indexOf('_') !== 0) {
        console.log('\n##', name, fname);
        if (proto.path) {
          console.log('Represents call to:');
          console.log('`%s %s`', proto.method, proto.path);
        }
        if (proto.requiresAuthorization) {
          console.log('> Requires authorization');
        }
        if (proto.schemas) {
          console.log('\n*Arguments:*');
          printSchema(proto.schemas.input, name);
          console.log('');

          if (proto.schemas.output) {
            console.log('\n*Callback body:*');
            printSchema(proto.schemas.output, name);
            console.log('');
          }
        }
      }
    });
  });

};

printToc();
printFunctions();
