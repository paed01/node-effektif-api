'use strict';

var crypto = require('crypto');
var debug = require('debug')('effektif-api:user:login');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var internals = {};

module.exports = internals.User = function() {};
util.inherits(internals.User, EventEmitter);

var loginCallbacks = {};

function performLogin(instance, args, callback) {
  var username = args.mailAddress;
  var password = args.password;
  var hash = crypto.createHash('md5').update(username).update(password).digest('hex');

  if (loginCallbacks[hash]) {
    debug('info', 'login for', args.mailAddress, 'in progress');
    return loginCallbacks[hash].push(callback);
  } else {
    debug('info', 'login for', args.mailAddress, 'in started', hash);
    loginCallbacks[hash] = [callback];
  }

  instance.createUsersLogin(args, function(err, res, body) {
    debug('info', 'login for', username, 'completed');

    if (!err && res.statusCode === 200 && body && body.token) {
      instance.emit('authorized', {
        username: username,
        authorization: body.token
      });
    }

    loginCallbacks[hash].forEach(function(cb) {
      cb(err, res, body);
    });

    delete loginCallbacks[hash];
  });
}

internals.User.prototype.login = function(username, password, optionsOrCallback, callback) {
  var args = {};
  if (typeof optionsOrCallback === 'function') {
    callback = optionsOrCallback;
  } else {
    args = optionsOrCallback;
  }
  args.mailAddress = username;
  args.password = password;

  performLogin(this, args, callback);
};
