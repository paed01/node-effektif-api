'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var internals = {};

module.exports = internals.Task = function() {};
util.inherits(internals.Task, EventEmitter);

internals.Task.prototype.getFormFieldByName = function(task, fieldName) {
  if (!task.form) {
    return null;
  }
  var field = _.find(task.form.fields, function(f) {
    return f.name === fieldName;
  });

  return field || null;
};
