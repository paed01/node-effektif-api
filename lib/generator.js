/* eslint no-underscore-dangle:0 no-use-before-define:0 */
'use strict';

var _ = require('lodash');
var async = require('async');
var Base = require('./base/.');
var EventEmitter = require('events').EventEmitter;
var Joi = require('joi');
var request = require('request');
var querystring = require('querystring');
var util = require('util');
var inspect = util.inspect;

var debug = require('debug')('effektif-api:generator');
// var debugError = require('Debug')('effektif-api:generator:error');

var pluralMap = {
  'processes': 'process',
  'activities': 'activity',
  'versions': 'version',
  'fields': 'field',
  'transitions': 'transition',
  'tasks': 'task',
  'parameters': 'parameter',
  'bindings': 'binding',
  'mappings': 'mapping',
  'casecolumns': 'caseColumn',
  'variables': 'vaiable',
  'accounts': 'account',
  'services': 'service',
  'options': 'option',
  'actioninstances': 'actionInstance',
  'files': 'file'
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
      case 'EmptyObject':
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
      argMeta.requiresAuthorization = (param.name.toUpperCase() === 'AUTHORIZATION');
      break;
    case 'path':
    case 'query':
      argSchema = Joi[param.dataType]().allow(null);
      param.required = false;
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
  var schemaMeta = {};
  parameters.forEach(function(param) {
    var argSchema = mapArgumentType(param, argumentIndex, apiDef);

    if (argSchema) {
      var argMeta = argSchema.describe().meta[0];
      if (argMeta.argument) {
        schema = schema.rename(argumentIndex.toString(), argMeta.name);
        argumentIndex++;
      }

      keys[argMeta.name] = argSchema;
      if (argMeta.requiresAuthorization) {
        schemaMeta.requiresAuthorization = true;
      }
    }
  });
  keys.callback = Joi.func().required().meta({
    argument: true
  }).description('function(err, resp, body)');
  schema = schema.rename(argumentIndex.toString(), 'callback');

  var mSchema = Joi.compile(schema.keys(keys)).meta(schemaMeta);

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

var requestCallback = function(err, resp, body, callback) {
  var self = this;
  if (err) return callback(err);
  if (typeof body === 'string') {
    if (/json/i.test(resp.headers['content-type'])) {
      var parseErr;
      try {
        body = JSON.parse(body);
      } catch (e) {
        parseErr = e;
      }
      if (parseErr) {
        self.log('error', 'Failed to parse json body ' + parseErr);
        return callback(parseErr, resp, body);
      }
    }
  }

  self.log('info', util.format(resp.request.method, resp.request.path, 'responded with', resp.statusCode));

  return callback(err, resp, body);
};

var ioptionsSchema = Joi.object().keys({
  credentials: Joi.object().optional().keys({
    authorization: Joi.string().optional().description('Authorization token, will be set as Authorization http header'),
    username: Joi.string().description('Username'),
    password: Joi.string().description('Password')
  }).description('Default credentials'),
  basePath: Joi.string().optional().description('Effektif-api base url, defaults to api endpoint documentation basePath'),
  onUnauthorized: Joi.func().optional().description('Excecuted when an unauthorized call is made'),
  users: Joi.object().optional().keys({
    login: Joi.func().required().description('Login function')
  }).unknown(true).description('Users instance'),
  log: Joi.func().optional().description('Logging function, defaults to console.log')
});

var generate = function(apiName, apiDef, options) {
  var internals = {};
  var log = typeof options.log === 'function' ? options.log : console.log.bind(console);

  // Pre-load models
  preLoadModels(apiName, apiDef);

  internals.Interface = function(defaults, ioptions) {
    var Debug = require('debug');
    if (this.constructor !== internals.Interface) {
      throw new Error(apiName + ' must be instantiated using new');
    }
    this.name = apiName.toLowerCase();

    Joi.attempt(ioptions, ioptionsSchema);

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

  // Placeholder for getting user interface. Set by index.js
  internals.Interface.prototype._getUserInstance = function() {
    if (this.options.users) return this.options.users;

    throw new Error('User interface is not loaded');
  };

  internals.Interface.prototype.onUnauthorized = function(requestArguments, callback) {
    var self = this;
    if (self.options.onUnauthorized) return self.options.onUnauthorized.apply(self, arguments);

    if (!self.options.credentials) {
      return callback(new Error('Missing credentials'));
    }

    var users = self._users || self._getUserInstance(self.defaults, self.options);
    if (!self._users) self._users = users;

    var innerCallback = function(err, resp, body) {
      if (err) return callback(err, resp, body);
      if (resp.statusCode === 200) {
        if (!body || !body.token) return callback(new Error('No authorization token'), resp, body);

        self.log('info', util.format('received new authorization token'));
        self.emit('authorized', {
          authorization: body.token,
          username: self.options.credentials.username
        });
        self.defaults.authorization = body.token;

        // Set authorization token
        requestArguments.Authorization = body.token;
      } else {
        self.log('warning', util.format('login returned', resp.statusCode));

        return callback(new Error('Login failed with ' + resp.statusCode), resp, body);
      }

      return callback(err, resp, body);
    };

    return users.login(self.options.credentials.username, self.options.credentials.password, innerCallback);
  };

  internals.Interface.prototype._applyDefaults = function(args, schema) {
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
      var argValue = args[p];
      var parmMeta = parm.meta[0];
      if (parmMeta.header) {
        headers[parmMeta.name] = argValue;
      } else if (parmMeta.path) {
        apiPath = apiPath.replace('{' + p + '}', argValue);
      } else if (parmMeta.query) {
        if (typeof argValue !== 'undefined' & argValue !== null) {
          qsDefined = true;
          qs[p] = argValue.toString();
        }
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
      var signatureDescr = schema.describe();
      var requiresAuthorization = !!signatureDescr.meta[0].requiresAuthorization;

      debug(api.path, op.method, opName, 'requires authorization:', requiresAuthorization);

      var output = mapOutput(op.type, apiDef);

      internals.Interface.schemas[opName] = {
        input: schema,
        output: output
      };
      internals.Interface.models = schemaModels;

      var makeRequest = function(reqArgs, callback) {
        var self = this;
        var reqOptions = self._getRequestOptions(operation, reqArgs);

        self.log('info', util.format('#' + opName, 'making call', op.method, reqOptions.uri));

        function innerCallback(err, resp, body) {
          return requestCallback.call(self, err, resp, body, callback);
        }

        return request(reqOptions, innerCallback);
      };

      var operation = function() {
        var self = this;
        var callback = arguments.length > 0 ? arguments[arguments.length - 1] : null;
        if (typeof callback !== 'function') {
          return this.emit('error', new Error(opName + ' requires callback'));
        }

        // Validate operation arguments schema
        var args = _.assign({}, arguments);
        args = self._applyDefaults(args, schema);
        var validationResult = schema.validate(args);
        var validationError = validationResult.error;
        var operationArgs  = validationResult.value;

        self.log('info', util.format('Calling', '#' + opName, 'with', inspect(operationArgs)));

        if (validationError) {
          // Check if authorization token is missing
          if (/authorization.*required/i.test(validationError.message)) {
            // Make login request
            return self.onUnauthorized(operationArgs, function(authErr, authResp, authBody) {
              if (authErr) return callback(authErr, authResp, authBody);
              // Perform request
              return makeRequest.call(self, operationArgs, callback);
            });
          }

          // Leave if other validation error
          self.log('error', util.format('#' + opName, 'validation failed with', validationError, inspect(validationError, false, 3)));
          return callback(validationError);
        }

        // Perform request
        function innerCallback(err, resp, body) {
          if (err) return callback(err, resp, body);

          // Check if request is unauthorized
          if (resp.statusCode === 401 && requiresAuthorization && self.options.credentials) {
            // Make login request
            return self.onUnauthorized(operationArgs, function(authErr, authResp, authBody) {
              if (authErr) return callback(authErr, authResp, authBody);
              // Make authorized request
              return makeRequest.call(self, operationArgs, callback);
            });
          }
          return callback(err, resp, body);
        }

        return makeRequest.call(self, operationArgs, innerCallback);
      };

      operation.schemas = internals.Interface.schemas[opName];
      operation.path = api.path;
      operation.method = op.method;
      operation.requiresAuthorization = requiresAuthorization;

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
