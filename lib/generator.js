/* eslint func-style:false */
'use strict';

var Joi = require('joi');
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');
var request = require('request');
var querystring = require('querystring');
var async = require('async');
var Base = require('./base/.');

var pluralMap = {
  'processes': 'process',
  'activities': 'activity',
  'versions': 'version',
  'fields': 'field',
  'transitions': 'transition',
  'tasks': 'task'
};
var schemaModels = {};

var mapMethod = function(method) {
  switch (method) {
    case 'PUT':
      return 'update';
    case 'POST':
      return 'create';
    default:
      return method.toLowerCase();
  }
};

var splitApiPath = function(apiPath) {
  var cleanPath = apiPath.replace(/^\//, '');
  var parts = cleanPath.split('/');
  var def = [];

  var pathRegex = /\{\w+\}/;

  parts.forEach(function(part, i) {
    if (!pathRegex.test(part)) {
      if (i < parts.length - 1 && pathRegex.test(parts[i + 1])) {
        def.push(pluralMap[part] || part);
      } else {
        def.push(part);
      }
    }
  });

  return def;
};

var getOperationName = function(apiPath, method) {
  var parts = splitApiPath(apiPath);

  var opName = mapMethod(method);
  parts.forEach(function(part) {
    opName += part.replace(/^\w/, function(match) {
      return match.toUpperCase();
    });
  });

  return opName;
};

var mapArrayType = function(arrayProp, apiDef, parentTypeStack) {
  var model = Joi.array();

  var refType = arrayProp.items ? arrayProp.items.$ref : null;

  if (!refType) {
    return model;
  } else if (parentTypeStack[refType]) {
    return model;
  }

  model = model.items(mapBodyType(refType, apiDef, null, parentTypeStack));
  return model;
};

var mapBodyType = function(type, apiDef, originalProp, parentTypeStack) {
  if (!type) {
    return null;
  }
  if (schemaModels[type]) {
    return schemaModels[type];
  }
  var model = apiDef.models[type];
  if (!model) {
    switch (type) {
      case 'object-id':
      case 'ConditionExpression':
        model = Joi.string();
        break;
      case 'LocalDateTime':
        model = Joi.date();
        break;
      case 'Long':
        model = Joi.number().integer();
        break;
      case 'NewBinding':
        model = mapBodyType('Binding', apiDef, originalProp, parentTypeStack);
        break;
      case 'Organization':
        model = Joi.object();
        break;
      case 'InputStream':
        model = Joi.any().meta({
          stream: true
        });
        break;
      case 'array':
        model = mapArrayType(originalProp, apiDef, parentTypeStack);
        break;
      case 'Object':
      case 'AssignmentCount':
      case 'AccessControlList':
      case 'Node':
      case 'License':
      case 'Edge':
      case 'Event':
        model = Joi.any();
        break;
      default:
        if (typeof Joi[type] !== 'function') {
          throw new Error('Joi type "' + type + '" not found');
        }

        model = Joi[type]();
        break;
    }

    return model;
  }

  // Add to parent stack to avoid circular references
  parentTypeStack[type] = true;

  var schema = Joi.object();
  if (model.properties) {
    var keys = {};
    Object.keys(model.properties).forEach(function(propName) {
      var prop = model.properties[propName];
      parentTypeStack[prop.type] = false;
      if (prop.type === type) {
        keys[propName] = Joi.any();
      } else {
        keys[propName] = mapBodyType(prop.type, apiDef, prop, parentTypeStack);
      }
    });
    schema = schema.keys(keys);
  }
  schemaModels[type] = schema;

  return schema;
};

var mapArgumentType = function(param, argIndex, apiDef) {
  var argSchema;
  var argMeta = {
    name: param.name,
    argument: true
  };
  argMeta[param.paramType] = true;

  switch (param.paramType) {
    case 'header':
      argSchema = Joi[param.dataType]();
      argMeta.argument = false;
      break;
    case 'path':
    case 'query':
      argSchema = Joi[param.dataType]();
      break;
    case 'body':
      var parentTypeStack = {};
      argSchema = mapBodyType(param.dataType, apiDef, null, parentTypeStack).label(param.dataType);
      argMeta.name = param.paramType;
      break;
    default:
      break;
  }
  if (!argSchema) {
    return null;
  }

  if (param.required) {
    argSchema = argSchema.required();
  }

  argMeta.originalType = param.dataType;
  argSchema = argSchema.meta(argMeta);

  return argSchema;
};

var mapArguments = function(parameters, apiDef) {
  var schema = Joi.object();
  var keys = {};
  var argumentIndex = 0;
  parameters.forEach(function(param) {
    var argSchema = mapArgumentType(param, argumentIndex, apiDef);

    if (argSchema) {
      var argMeta = argSchema.describe().meta[0];
      if (argMeta.argument) {
        schema = schema.rename(argumentIndex.toString(), argMeta.name);
        argumentIndex++;
      }

      keys[argMeta.name] = argSchema;
    }
  });
  keys.callback = Joi.func().required().meta({
    argument: true
  });
  schema = schema.rename(argumentIndex.toString(), 'callback');

  var mSchema = Joi.compile(schema.keys(keys));

  return mSchema;
};

var mapOutput = function(outputType, apiDef) {
  var outputSchema = mapBodyType(outputType, apiDef);
  if (!outputSchema) {
    return outputSchema;
  }

  var mSchema = Joi.compile(outputSchema);
  return mSchema;
};

var preLoadModels = function(apiName, apiDef) {
  // Fix for Search not having SearchResult model. Probably this will complete before Search requires SearchResult
  async.each(Object.keys(apiDef.models), function(modelKey, next) {
    var model = apiDef.models[modelKey];
    if (!schemaModels[model.id]) {
      mapBodyType(model.id, apiDef, model, {});
    }
    next();
  });
};

var generate = function(apiName, apiDef, options) {
  var Debug = require('debug');
  var internals = {};
  var log = typeof options.log === 'function' ? options.log : console.log.bind(console);

  // Pre-load models
  preLoadModels(apiName, apiDef);

  internals.Interface = function(defaults, ioptions) {
    if (this.constructor !== internals.Interface) {
      throw new Error(apiName + ' must be instantiated using new');
    }
    this.name = apiName.toLowerCase();
    this.defaults = defaults || {};
    this.options = ioptions || {};
    this.options.basePath = apiDef.basePath;
    var logFunction = typeof this.options.log === 'function' ? this.options.log : log;

    this._debug = Debug('effektif-api:' + this.name);
    this._debugError = Debug('effektif-api:' + this.name + ':error');
    this._debug.log = logFunction;
    this._debugError.log = logFunction;
  };
  if (Base[apiName]) {
    util.inherits(internals.Interface, Base[apiName]);
  } else {
    util.inherits(internals.Interface, EventEmitter);
  }

  internals.Interface.schemas = {};
  internals.Interface.apiName = apiName;
  internals.Interface.apiDoc = apiDef;

  internals.Interface.prototype.applyDefaults = function(args, schema) {
    var self = this;
    var schemaDescr = schema.describe();

    // Apply headers
    Object.keys(schemaDescr.children).forEach(function(c) {
      var childMeta = schemaDescr.children[c].meta[0];
      if (childMeta.header && self.defaults) {
        args[childMeta.name] = self.defaults[c] || self.defaults[c.toLowerCase()];
      }
    });

    return args;
  };

  internals.Interface.prototype.log = function(level, message) {
    if (level === 'error') {
      return this._debugError(message);
    }
    return this._debug(message);
  };

  internals.Interface.prototype._getRequestOptions = function(operation, args) {
    var self = this;

    var apiPath = operation.path;
    var descr = operation.schemas.input.describe();
    var qsDefined = false;
    var qs = {};
    var headers = {};
    Object.keys(descr.children).forEach(function(p) {
      var parm = descr.children[p];
      var parmMeta = parm.meta[0];
      if (parmMeta.header) {
        headers[parmMeta.name] = args[p];
      } else if (parmMeta.path) {
        apiPath = apiPath.replace('{' + p + '}', args[p]);
      } else if (parmMeta.query) {
        qsDefined = true;
        qs[p] = args[p].toString();
      }
    });

    var reqOptions = {
      method: operation.method,
      uri: self.options.basePath + apiPath + (qsDefined ? '?' + querystring.stringify(qs) : ''),
      headers: headers,
      json: args.body
    };
    if (/GET/i.test(operation.method)) {
      var outputSchema = operation.schemas.output;
      reqOptions.json = (outputSchema && outputSchema.isJoi);
    }

    return reqOptions;
  };

  apiDef.apis.forEach(function(api) {
    api.operations.forEach(function(op) {

      var opName = getOperationName(api.path, op.method);
      var schema = mapArguments(op.parameters, apiDef);
      var output = mapOutput(op.type, apiDef);

      internals.Interface.schemas[opName] = {
        input: schema,
        output: output
      };
      internals.Interface.models = schemaModels;

      var operation = function() {
        var self = this;
        var callback = arguments.length > 0 ? arguments[arguments.length - 1] : null;
        if (typeof callback !== 'function') {
          return this.emit('error', new Error('callback is required'));
        }

        var args = _.assign({}, arguments);

        args = self.applyDefaults.call(self, args, schema);

        self.log('info', util.format('Calling', '#' + opName, 'with', util.inspect(args)));
        schema.validate(args, function(err, value) {
          if (err) {
            self.log('error', util.format('#' + opName, 'validation failed with', err));
            return callback(err);
          }
          var reqOptions = self._getRequestOptions(operation, value);

          self.log('info', util.format('#' + opName, 'making call', op.method, reqOptions.uri));
          return request(reqOptions, function(err, resp, body) {
            if (typeof body === 'string') {
              if (/json/i.test(resp.headers['content-type'])) {
                var parseErr;
                try {
                  body = JSON.parse(body);
                } catch (e) {
                  parseErr = e;
                }
                if (parseErr) {
                  self.log('error', 'Failed to parse json body' + parseErr);
                  return callback(parseErr);
                }
              }
            }
            return callback(err, resp, body);
          });
        });
      };

      operation.schemas = internals.Interface.schemas[opName];
      operation.path = api.path;
      operation.method = op.method;

      internals.Interface.prototype[opName] = operation;
    });
  });

  return internals.Interface;
};

exports = module.exports = function(apiName, apiDef, options) {
  var template = apiDef;
  if (typeof apiDef === 'string') {
    template = require(apiDef);
  }
  var api = generate(apiName, template, options || {});
  return api;
};
