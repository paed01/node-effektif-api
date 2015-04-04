node effektif api
=================

[![Build Status](https://secure.travis-ci.org/paed01/node-effektif-api.png)](http://travis-ci.org/paed01/node-effektif-api)[![Coverage Status](https://coveralls.io/repos/paed01/node-effektif-api/badge.svg?branch=master)](https://coveralls.io/r/paed01/node-effektif-api?branch=master)

Unofficial node [effektif][1] [api][2] wrapper.

# Introduction

The api is auto-generated from the effektif documentation [json-endpoint][3].

# Naming

The module functions are generated from the api-endpoints. The name is composed of the http-operation and the api-endpoint.

|HTTP-verb |function prefix|
|----------|---------------|
| `GET`    | get           |
| `POST`   | create        |
| `PUT`    | update        |
| `DELETE` | delete        |

Examples:

|Operation |function name  |
|----------|---------------|
| `POST /{organizationKey}/tasks` | `createTasks` | 
| `DELETE /{organizationKey}/processes/{processId}/activities/{activityId}` | `deleteProcessActivity` | 

The plural ending is removed if the noun is immediately followed by a path parameter, e.g:

`DELETE /{organizationKey}/processes/{processId}` name is `deleteProcess`.

# Interface

All Api-endpoints are represented. Since most endpoints requires an authorization header the token is passed as an option when creating the endpoint handler.

## Schemas

The operation schemas ([joi](https://github.com/hapijs/joi)) are stored with the module.

```javascript
var Api = require('effektif-api');
var getProcessInputSchema = Api.Process.schemas.getProcess.input;

console.log("#getProcess input", getProcessInputSchema.describe());

var getProcessOutputSchema = Api.Process.schemas.getProcess.output;

console.log("#getProcess output", getProcessOutputSchema.describe());
```

## Function callback

All functions takes a callback as final argument. The callback has the same signature as the [request-module](https://www.npmjs.com/package/request) callback, i.e:

```javascript
function(error, response, body) {
	
}
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
# Debugging

The module uses [debug](github.com/visionmedia/debug) so run with environment variable `DEBUG=effektif-api*`.

# Notes

Not all endpoints in the effektif api are covered by tests. That goes for the naming of functions as well. Feel free to PR to improve the module or even the function names.

[1]: http://www.effektif.com/
[2]: https://app.effektif.com/api-docs/index.html
[3]: https://app.effektif.com/api/v1/docs
