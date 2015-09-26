node effektif api
=================

[![Build Status](https://secure.travis-ci.org/paed01/node-effektif-api.png)](http://travis-ci.org/paed01/node-effektif-api)[![Coverage Status](https://coveralls.io/repos/paed01/node-effektif-api/badge.svg?branch=master)](https://coveralls.io/r/paed01/node-effektif-api?branch=master)

Unofficial node [effektif][1] [api][2] wrapper.

**Table of contents**
- [API](/API.md)
- Interface
  - [Constructor](#constructor)
  - [Events](#events)
  - [Tasks](#tasks)
    - [`#getFormFieldByName`](#getformfieldbyname)
  - [Users](#users)
    - [`#login`](#login)

# Introduction

The api is auto-generated from the effektif documentation [json-endpoint][3].

# Interface

All Api-endpoints are represented. Since most endpoints requires an authorization header the token is passed as an option when creating the endpoint handler.

## Constructor

The interface constructor takes an object with options.

```javascript
var Api = require('effektif-api');
var Users = require('effektif-api').User;

var processes = new Api.Process({
  authorization: 'token',
  credentials: {
    username: 'me@example.com',
    password: 'sup3rs3cr3t'
  },
  users: new Users()
});
```

Constructor argument:

- `options`; Object with the following properties
  - `authorization`: Optional. Authorization token to use for calls to the Api
  - `credentials`: Optional. Credentials
    - `username`: Username (emailadress)
    - `password`: Password
  - `users`: Optional. An `User` instance to use for log in

## Events

All interfaces inherit from EventEmitter.

### `authorized`

Is emitted when a succesfull login was performed.

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
  console.log('Successfully logged in', result.username, 'and got token', result.authorization);  
});
```

## Tasks

```javascript
var Api = require('effektif-api');

var Tasks = Api.Task;
var tasks = new Tasks({
  authorization: 'token'
});

tasks.createTasks('test-org', { processId: '1' }, function(err, resp, body) {
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

  tasks.updateTaskFormField('test-org', nextTask.id, field.id, field, function(err, resp, res) {
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

tasks.createTasks('test-org', { processId: '1' }, function(err, resp, body) {
  if (err) console.log(err);    
});
```

### `#login`

Utility function to perform user login.

```javascript
var Api = require('effektif-api');
var users = new Api.User();

users.login('me@example.com', 'superse3cret', function(err, resp, body) {
  console.log('new token', body.token);
});
```

# Naming

The module functions are generated from the api-endpoints. The name is composed of the http-operation and the api-endpoint.

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

tasks.createTasks(organizationKey, newTask, function(err, resp, body) {
  console.log(err, body);  
});
```

or `DELETE /{organizationKey}/processes/{processId}/activities/{activityId}`:

```javascript
var Api = require('effektif-api');
var processes = new Api.Process({authorization: 'token'});

processes.deleteProcessActivity(organizationKey, processId, activityId, function(err, resp, body) {
  console.log(err, body);  
});
```

The plural ending is removed if the noun is immediately followed by a path parameter, e.g:

`DELETE /{organizationKey}/processes/{processId}` function name is `deleteProcess`.

## Input Schemas

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

### Path parameters

The path parameters will build the method signature. They are considered required.

### Query parameters

The query parameters will also be appended to the method signature. They are considered optional but must be defined. Use `null` or `undefined`to leave them blank.

```javascript
var Api = require('effektif-api');
var processes = new Api.Process({ authorization: 'token'});

processes.getProcesses('test-org', null, function(err, resp, body) {
  console.log('This should work and result in', body);
});
```

## Function callback

All functions takes a callback as final argument. The callback has the same signature as the [request-module](https://www.npmjs.com/package/request) callback, i.e:

```javascript
function(error, response, body) {

}
```

# Debugging

The module uses [debug](github.com/visionmedia/debug) so run with environment variable `DEBUG=effektif-api*`.

[1]: http://www.effektif.com/
[2]: https://app.effektif.com/api-docs/index.html
[3]: https://app.effektif.com/api/v1/docs
