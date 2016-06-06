'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cmd) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new Promise(function (resolve, reject) {
    var bits = cmd.split(/\s+/);
    var entry = bits.shift();
    var ps = (0, _child_process.spawn)(entry, bits, options);

    ps.on('error', reject).on('exit', function (status) {
      if (status === 0) {
        return resolve();
      }
      reject(new Error('Got status ' + status));
    });

    ps.stdout.pipe(process.stdout);
    ps.stderr.pipe(process.stderr);
  });
};

var _child_process = require('child_process');

;