var util = require('util');
var log = console.log ? console.log.bind(console) : Function.prototype;

module.exports = function () {
  arguments = arguments || {};
  var msg = [];
  var keys = Object.keys(arguments);
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    var arg = arguments[key];
    if (typeof arg == 'object') {
      msg.push(util.inspect(arg));
    } else {
      msg.push(arg);
    }
  }
  log(msg.join(' '));
};
