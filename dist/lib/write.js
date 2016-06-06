'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file, source) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  return new Promise(function (resolve, reject) {
    var stream = _fs2.default.createWriteStream(file, options);
    stream.on('error', reject).on('finish', resolve);
    stream.write(source);
    stream.end();
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }