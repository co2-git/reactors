'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file, changer) {
  return (0, _promiseSequencer2.default)(function () {
    return (0, _read2.default)(file);
  }, function (content) {
    return new Promise(function (resolve, reject) {
      try {
        content = content.replace(/\n/g, '').replace(/\s\s+/g, '');
        var json = JSON.parse(content);
        changer(json);
        resolve(json);
      } catch (error) {
        reject(error);
      }
    });
  }, function (json) {
    return (0, _write2.default)(file, JSON.stringify(json, null, 2));
  });
};

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

var _promiseSequencer = require('promise-sequencer');

var _promiseSequencer2 = _interopRequireDefault(_promiseSequencer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }