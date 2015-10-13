'use strict';

var Api = require('../');
var util = require('util');
var debug = require('debug')('effektif-api:doc');

var nameOnly, fnameOnly;
if (process.argv.length > 2) {
  nameOnly = process.argv[2];
}
if (process.argv.length > 3) {
  fnameOnly = process.argv[3];
}

var pkge = require('../package.json');

var models = {};

console.log(util.format('%s API Reference', pkge.version));
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

function getOriginalType(schemaDesc) {
  var itemModel = schemaDesc;
  if (schemaDesc.type === 'array' && schemaDesc.items && schemaDesc.items.length) {
    itemModel = schemaDesc.items[0].type === 'object' ? schemaDesc.items[0] : schemaDesc;
  }

  var isModel = itemModel.tags && itemModel.tags.indexOf('model') > -1;
  if (!isModel) return null;

  var meta = itemModel.meta && itemModel.meta[0];
  return meta && meta.originalType;
}

function getSchemaType(schemaDesc) {
  if (schemaDesc.flags && schemaDesc.flags.func) return 'function';

  var originalType = getOriginalType(schemaDesc);
  var type = schemaDesc.type;

  switch (schemaDesc.type) {
    case 'array':
      if (originalType) {
        return util.format('%s [%s](#model-%s)', schemaDesc.type, originalType, originalType.toLowerCase());
      } else if (schemaDesc.items && schemaDesc.items.length) {
        return util.format('%s %s', type, schemaDesc.items[0].type);
      }
    case 'object':
      if (originalType) {
        return util.format('%s [%s](#model-%s)', schemaDesc.type, originalType, originalType.toLowerCase());
      }
    default:
      return schemaDesc.type;
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
    var originalType = getOriginalType(child);

    if (originalType) {
      addModel(originalType, interfaceName, operation);
    }

    var msg = '';
    msg += util.format('%s- `%s`:', padding, name);

    if (required) msg += util.format(' **required**');

    msg += util.format(' %s', getSchemaType(child));

    // if (originalType) {
    //   if (interfaceName) {
    //     msg += util.format(' [%s](#model-%s)', originalType, originalType.toLowerCase());
    //   } else {
    //     msg += util.format(' ref [%s](#model-%s)', originalType, originalType.toLowerCase());
    //   }
    // }
    if (child.description) msg += util.format(' - %s', child.description);
    if (child.notes) msg += util.format('. %s', child.notes.join(', '));

    console.log(msg);

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

    console.log('**Constructor:**');
    console.log('- `options`');
    printSchema(Intfc.ctorSchema, null, null, '  ');

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
          console.log('');
          console.log('> Requires authorization');
        }
        if (op.schemas) {
          debug(fname, op.schemas.input.describe().children);
          console.log('\n**Arguments:**');
          printSchema(op.schemas.input, name, fname, '', true);
          console.log('');

          if (op.schemas.output) {
            console.log('\n**Callback:**');
            console.log('- `error`: Error or null');

            var output = op.schemas.output.describe();
            var originalType = output.label;

            if (originalType) {
              addModel(originalType, name, fname);
            }

            console.log('- `body`:', '[' + output.label + '](' + '#model-' + output.label.toLowerCase() + ')');

            console.log('- `resp`: Http response');
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
