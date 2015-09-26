'use strict';

var Api = require('../');
var util = require('util');

var nameOnly, fnameOnly;
if (process.argv.length > 2) {
  nameOnly = process.argv[2];
}
if (process.argv.length > 3) {
  fnameOnly = process.argv[3];
}

var models = {};

console.log('API');
console.log('===');
console.log('Auto-generated Api documentation.');

function printToc() {
  console.log('**Table of contents:**');

  Object.keys(Api).forEach(function(name) {
    if (nameOnly && name !== nameOnly) return;

    var Intfc = Api[name];

    console.log('-', '[' + name + '](#' + name.toLowerCase() + ')');

    // var inst = new Intfc();
    var protos = Object.keys(Intfc.prototype);

    protos.forEach(function(fname) {
      if (fname !== 'log' && fname.indexOf('_') !== 0) {
        console.log('  -', '[`' + fname + '`](#' + name.toLowerCase() + '-' + fname.toLowerCase() + ')');
      }
    });
  });
}

function addModel(model, interfaceName, operationName) {
  if (!interfaceName) return;

  var title = 'Model ' + model;

  if (!models[title]) {
    models[title] = {
      name: model,
      interfaceName: interfaceName,
      operations: {}
    };
  }

  if (operationName) {
    models[title].operations[interfaceName + '.' + operationName] = {
      interface: interfaceName,
      operation: operationName
    };
  }
}

function printSchema(schema, interfaceName, operation, padding, ignoreChildren) {
  var descr = schema.describe ? schema.describe() : schema;
  var children = descr.children;
  if (!padding) padding = '';

  Object.keys(children).forEach(function(name) {
    var child = children[name];
    var meta = child.meta && child.meta[0];

    if (meta && meta.header) {
      return;
    }

    var required = (child.flags && child.flags.presence === 'required') || (meta && meta.path);
    var originalType = child.label;

    if (originalType) addModel(originalType, interfaceName, operation);

    process.stdout.write(util.format('\n%s- `%s`:', padding, name));

    if (required) process.stdout.write(util.format(' required'));

    process.stdout.write(util.format(' %s', child.type));

    if (originalType) {
      if (interfaceName) {
        process.stdout.write(util.format(' [%s](#model-%s)', originalType, originalType.toLowerCase()));
      } else {
        process.stdout.write(util.format(' ref %s', originalType));
      }
    }
    if (child.description) process.stdout.write(util.format(' - %s', child.description));

    if (!ignoreChildren && child.children && Object.keys(child.children).length > 0) {
      printSchema(child, interfaceName, operation, padding + '  ');
    }
  });
}

function printFunctions() {
  Object.keys(Api).forEach(function(name) {
    if (nameOnly && name !== nameOnly) return;

    console.log('\n#', name);

    var Intfc = Api[name];

    // var inst = new Intfc();
    var protos = Object.keys(Intfc.prototype);

    protos.forEach(function(fname) {
      if (fnameOnly && fname !== fnameOnly) return;

      var op = Intfc.prototype[fname];

      if (fname !== 'log' && fname.indexOf('_') !== 0) {
        console.log('\n##', name, fname);
        if (op.path) {
          console.log('Represents call to:');
          console.log('`%s %s`', op.method, op.path);
        }
        if (op.requiresAuthorization) {
          console.log('> Requires authorization');
        }
        if (op.schemas) {
          console.log('\n**Arguments:**');
          printSchema(op.schemas.input, name, fname, '', true);
          console.log('');

          if (op.schemas.output) {
            console.log('\n**Callback:**');
            console.log('- `error`: Error or null');
            console.log('- `response`: Http response');

            var output = op.schemas.output.describe();
            var originalType = output.label;

            if (originalType) {
              addModel(originalType, name, fname);
            }

            console.log('- `body`:', '[' + output.label + '](' + '#model-' + output.label.toLowerCase() + ')');

            // printSchema(op.schemas.output, name);
            // console.log('');
          }
        }
      }
    });
  });
};

function printModels() {
  console.log('\n# Models');

  Object.keys(models).forEach(function(title) {
    var model = models[title];

    var Intfc = Api[model.interfaceName];
    var modelSchema = Intfc.models[model.name];

    console.log('\n##', title);

    if (modelSchema) {
      printSchema(modelSchema);
      console.log('');
    }

    var operations = Object.keys(model.operations);
    if (operations.length > 0) {
      console.log('\n**Used by:**');
      operations.forEach(function(opTitle) {
        var op = model.operations[opTitle];
        console.log(util.format('[`%s`](#%s-%s)', opTitle, op.interface.toLowerCase(), op.operation.toLowerCase()));
      });
    }
  });
}

printToc();
printFunctions();
printModels();
