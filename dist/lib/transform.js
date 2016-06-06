'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file, transformer, target) {
  return (0, _promiseSequencer2.default)(function () {
    return (0, _read2.default)(file);
  }, function (source) {
    return (0, _write2.default)(target || file, transformer(source));
  });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

var _promiseSequencer = require('promise-sequencer');

var _promiseSequencer2 = _interopRequireDefault(_promiseSequencer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }