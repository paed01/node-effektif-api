node effektif api
=================

[![Build Status](https://secure.travis-ci.org/paed01/node-effektif-api.png)](http://travis-ci.org/paed01/node-effektif-api)

Unofficial node [effektif][1] [api][2] wrapper.

# Introduction

This module autogenerates modules from the [json-endpoint][3] of the effektif api documentation.

# Naming

Since the api is autognerated from the effiktif-api-doc the names have to be generated as well. The function names are generated from the endpoint path. E.g:

`POST /{organizationKey}/tasks` is renamed to `createTask`.

The plural ending is removed if it is not followed by a path parameter, e.g:

`DELETE /{organizationKey}/processes/{processId}` is renamed to `deleteProcess`.

# Function callback

The function takes a callback as final argument. The callback is the same as the request-module callback, i.e:

```javascript
function(err, httpResponse, body) {}
```

# Interface

All Api-endpoints are represented. To initialise a new endpoint handler create one with new.

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

[1]: http://www.effektif.com/
[2]: https://app.effektif.com/api-docs/index.html
[3]: https://app.effektif.com/api/v1/docs
