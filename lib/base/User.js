'use strict';

var _ = require('lodash');
var crypto = require('crypto');
var debug = require('debug')('effektif-api:user:login');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var internals = {};

module.exports = internals.User = function() {};
util.inherits(internals.User, EventEmitter);

var loginCallbacks = {};

internals.User.prototype.login = function(username, password, optionsOrCallback, callback) {
  var args = {};
  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
  } else {
    args = optionsOrCallback;
  }
  args.emailAddress = username;
  args.password = password;

  performLogin(this, _.clone(args), callback);
};

function performLogin(instance, args, callback) {
  var username = args.emailAddress;
  var password = args.password;
  var hash = crypto.createHash('md5').update(username).update(password).digest('hex');

  if (loginCallbacks[hash]) {
    debug('info', 'login for user', args.emailAddress, 'already in progress');
    return loginCallbacks[hash].push(callback);
  } else {
    debug('info', 'login for user', args.emailAddress, 'start', hash);
    loginCallbacks[hash] = [callback];
  }

  instance.createUsersLogin(args, function(err, body, resp) {
    if (err) debug('error', 'login for', username, 'failed', err);
    else debug('login for', username, 'succeeded with', resp.statusCode);

    if (resp && resp.statusCode === 200 && body && body.token) {
      instance.emit('authorized', {
        username: username,
        authorization: body.token
      });
    }

    loginCallbacks[hash].forEach(function(cb) {
      cb(err, body, resp);
    });

    delete loginCallbacks[hash];
  });
}
