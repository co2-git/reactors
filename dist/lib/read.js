'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return new Promise(function (resolve, reject) {
    var source = '';
    _fs2.default.createReadStream(file).on('error', reject).on('data', function (data) {
      source += data.toString();
    }).on('end', function () {
      resolve(source);
    });
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }