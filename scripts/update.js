#!/usr/bin/env node

/* eslint no-console:0 */
'use strict';

var async = require('async');
var fs = require('fs');
var path = require('path');
var request = require('request');

var baseDir = path.dirname(process.argv[1]);
var destinationDir = path.join(baseDir, '../tmp');

if (process.argv.length > 2) {
  destinationDir = path.join(baseDir, process.argv[2]);
}

var docUri = 'https://app.effektif.com/api/v1/docs';

function update() {
  getDocs(function() {
    console.log('docs completed');

    var docs = require(path.join(destinationDir, 'docs.json'));
    console.log('docs version is v%s', docs.apiVersion);

    getApis(docs, function() {
      console.log('completed!');
    });
  });
}

function getDocs(callback) {
  fs.mkdir(destinationDir, function() {
    var docsFile = path.join(destinationDir, 'docs.json');
    var ws = fs.createWriteStream(docsFile);

    console.log('getting docs at %s to %s', docUri, docsFile);

    request
      .get(docUri)
      .on('error', function(err) {
        console.log(err);
        return callback(err);
      })
      .pipe(ws);

    ws.on('close', callback);
  });
}

function getApis(docs, callback) {
  async.each(docs.apis, getApi, callback);
}

function getApi(api, callback) {
  var ws = fs.createWriteStream(path.join(destinationDir, api.path + '.json'));
  var apiUri = docUri + api.path;

  console.log('getting api docs at', apiUri);

  request
    .get(apiUri)
    .on('error', function(err) {
      console.log(err);
      return callback(err);
    })
    .pipe(ws);

  ws.on('close', callback);
}

update();
