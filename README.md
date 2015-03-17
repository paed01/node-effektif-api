node effektif api
=================

[![Build Status](https://secure.travis-ci.org/paed01/node-effektif-api.png)](http://travis-ci.org/paed01/node-effektif-api)

Unofficial node [effektif][1] [api][2] wrapper.

# Introduction

This module autogenerates modules from the [json-endpoint][3] of the effektif api documentation.

# Naming

Since the api is autognerated from the effiktif-api-doc the names have to be generated as well. The function names are generated from the endpoint path. E.g:

`POST /{organizationKey}/tasks`, hence it is named `createTask`.

The plural ending is removed if it is not followed by a path parameter, e.g:

`DELETE /{organizationKey}/processes/{processId}` name is `deleteProcess`.

# Function callback

All functions takes a callback as final argument. The callback has the same signature as the [request-module](https://www.npmjs.com/package/request) callback, i.e:

```javascript
function(error, response, body) {}
```

# Interface

All Api-endpoints are represented. Since most endpoints requires an authorization header the token is passed as an option when creating the endpoint handler.

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

# Notes

Not all endpoints in the effektif api are tested by this module. That goes for the naming of functions as well. Feel free to PR to improve the module or even the function names.

[1]: http://www.effektif.com/
[2]: https://app.effektif.com/api-docs/index.html
[3]: https://app.effektif.com/api/v1/docs
