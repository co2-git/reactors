'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bundle;

var _exec = require('./exec');

var _exec2 = _interopRequireDefault(_exec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bundle() {
  return (0, _exec2.default)('node_modules/.bin/webpack');
}