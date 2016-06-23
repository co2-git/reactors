'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logger(message) {
  return new Promise(function (resolve) {
    console.log();
    console.log(_colors2.default.cyan.bold(message));
    console.log();
    resolve();
  });
}

logger.ok = function (message) {
  return new Promise(function (resolve) {
    console.log();
    console.log(_colors2.default.green.bold(message));
    console.log();
    resolve();
  });
};

exports.default = logger;