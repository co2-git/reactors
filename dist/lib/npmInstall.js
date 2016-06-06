'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  for (var _len = arguments.length, deps = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    deps[_key - 1] = arguments[_key];
  }

  return (0, _exec2.default)('npm install --save ' + deps.join(' '), { cwd: _path2.default.join(process.cwd(), app) });
};

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;