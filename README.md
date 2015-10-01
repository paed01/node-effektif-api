node effektif api
=================

[![Build Status](https://secure.travis-ci.org/paed01/node-effektif-api.png)](http://travis-ci.org/paed01/node-effektif-api)[![Coverage Status](https://coveralls.io/repos/paed01/node-effektif-api/badge.svg?branch=master)](https://coveralls.io/r/paed01/node-effektif-api?branch=master)

Unofficial node [effektif][1] [api][2] wrapper.

**Table of contents**
- [Interface](#interface)
  - [Constructor](#constructor)
  - [Events](#events)
  - [Tasks](#tasks)
    - [`#getFormFieldByName`](#getformfieldbyname)
  - [Users](#users)
    - [`#login`](#login)
- [API Generator](#api-generator)
  - [Naming of operations](#naming-of-operations)
  - [Operation callback](#operation-callback)
- [Debug](#debug)
- [API](/docs/API.md)
- [Changelog](/CHANGELOG.md)

# Introduction

The api is auto-generated from the effektif documentation [json-endpoint][3].

# Interface

All [Api-endpoints](/API.md) are represented.

## Constructor

The interface constructor takes an object with options.

- `options`: Object with the following properties:
  - `authorization`: optional string - Authorization token, will be set as Authorization http header
  - `credentials`: optional object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: optional string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `baseRequest`: optional - Default [request][4]
  - `log`: optional - Logging function, defaults to console.log
  - `users`: optional - [Users](#users) instance
  - [`onUnauthorized`](#onunauthorized-option): optional function that will be called when an unauthorized call is made

Example:

```javascript
var request = require('request');

var Api = require('effektif-api');
var Users = require('effektif-api').User;

var baseRequest = request.defaults({'proxy':'http://localproxy.com'});

var processes = new Api.Process({
  authorization: 'token',
  credentials: {
    username: 'me@example.com',
    password: 'sup3rs3cr3t'
  },
  basePath: 'http://effektif-cluster.local/api'
  baseRequest: baseRequest
});
```

### `onUnauthorized` option

Optional function used to get user authorization token. The function is called when an unauthorized call was made. If a token is returned in callback the operation will be called with then new authorization token. The function is bound to the module instance on execution, i.e. `this` can be used to access module options.

The function signature is:
- `operationArguments`: The actual operation arguments
- `callback`:
  - `error`: Error if any
  - `token`: The new authorization token to use

Example:

```javascript
var db = require('database'); // Arbitrary database module

function onUnauthorized(operationArgs, callback) {
  db.findOne({
    username: this.options.credentials.username
  }).exec(function(err, doc) {
    if (err) return callback(err);

    // Return token in callback
    return callback(null, doc.token);
  });
}

var processes = new Api.Process({
  onUnauthorized: onUnauthorized,
  credentials: {
    username: 'me@example.com'
  }
});
```

## Events

All interfaces inherit from EventEmitter.

### `authorized`

The `authorized` event is emitted when a succesfull login was performed.

The listener function will get `username` and `authorization`-token.

```javascript
var Api = require('effektif-api');

var processes = new Api.Process({
  credentials: {
    username: 'me@example.com',
    password: 'sup3rs3cr3t'
  }
});

processes.on('authorized', function(result) {
  console.log('A good place to store new token', result.authorization, 'for', result.username);
});
```

## Tasks

```javascript
var Api = require('effektif-api');

var Tasks = Api.Task;
var tasks = new Tasks({
  authorization: 'token'
});

tasks.createTasks('test-org', { processId: '1' }, function(err, body, resp) {
  if (err) console.log(err);    
});
```

### `#getFormFieldByName`

Utility function to get FormField by name from task data.

```javascript
var Api = require('effektif-api');

var Tasks = Api.Task;
var tasks = new Tasks({
  authorization: 'token'
});

tasks.getTaskNext('test-org', '1', function(err, resp, nextTask) {
  if (err) return console.log(err);

  var field = nextTask.getFormFieldByName(task, 'myField');

  field.value = '123';

  tasks.updateTaskFormField('test-org', nextTask.id, field.id, field, function(err, body, resp) {
    console.log('success?', !!!err);
  });
});
```

## Users

```javascript
var Api = require('effektif-api');

var Tasks = Api.Task;
var tasks = new Tasks({
  authorization: 'token',
  credentials: {
    username: 'me@example.com',
    password: 'sup3rs3cr3t'
  }
});

tasks.createTasks('test-org', { processId: '1' }, function(err, body, resp) {
  if (err) console.log(err);    
});
```

### `#login`

Utility function to perform user login.

```javascript
var Api = require('effektif-api');
var users = new Api.User();

users.login('me@example.com', 'superse3cret', function(err, body, resp) {
  console.log('new token', body.token);
});
```

# API Generator

Module functions are generated from the api-endpoints. 

## Naming of operations

The name is composed of the http-operation and the api-endpoint.

|HTTP-verb |function prefix|
|----------|---------------|
| `GET`    | get           |
| `POST`   | create        |
| `PUT`    | update        |
| `DELETE` | delete        |

Examples:

To call `POST /{organizationKey}/tasks`:

```javascript
var Api = require('effektif-api');
var tasks = new Api.Task({authorization: 'token'});

var newTask = {};

tasks.createTasks(organizationKey, newTask, function(err, body, resp) {
  console.log(err, body);  
});
```

or `DELETE /{organizationKey}/processes/{processId}/activities/{activityId}`:

```javascript
var Api = require('effektif-api');
var processes = new Api.Process({authorization: 'token'});

processes.deleteProcessActivity(organizationKey, processId, activityId, function(err, body, resp) {
  console.log(err, body);  
});
```

The plural ending is removed if the noun is immediately followed by a path parameter, e.g:

`DELETE /{organizationKey}/processes/{processId}` function name is `deleteProcess`.

### Path parameters

The path parameters will build the method signature. They are considered required.

### Query parameters

The query parameters will also be appended to the method signature. They are considered optional but must be defined. Use `null` or `undefined`to leave them blank.

```javascript
var Api = require('effektif-api');
var processes = new Api.Process({ authorization: 'token'});

processes.getProcesses('test-org', null, function(err, body, resp) {
  console.log('This should work and result in', body);
});
```

### Input Schemas

The operation schemas ([joi](https://github.com/hapijs/joi)) are stored with the module.

```javascript
var Api = require('effektif-api');
var getProcessInputSchema = Api.Process.schemas.getProcess.input;

console.log("#getProcess input", getProcessInputSchema.describe());

var getProcessOutputSchema = Api.Process.schemas.getProcess.output;

console.log("#getProcess output", getProcessOutputSchema.describe());
```

The schemas are also stored with the instance methods.

```javascript
var Api = require('effektif-api');
var processes = new Api.Process({ authorization: 'token'});

console.log(processes.getProcesses.schemas.output.describe());
```

## Operation callback

All operations takes callback as final argument. The callback is required.

- `error`: Error or null. Api-calls with a http response status code above 399 will be considered an error
- `result`: Operation result
- `httpResponse`: The HTTP response from the call to the actual api. Should be returned even if an error has occurred

```javascript
function(err, body, resp) {
  console.log('call to', resp.request.path, 'responded with', resp.statusCode);
}
```

# Debug

The module uses [debug](github.com/visionmedia/debug) so run with environment variable `DEBUG=effektif-api*`.

[1]: http://www.effektif.com/
[2]: https://app.effektif.com/api-docs/index.html
[3]: https://app.effektif.com/api/v1/docs
[4]: https://www.npmjs.com/package/request
