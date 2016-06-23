'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLocalFile;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocalFile(file) {
  return _path2.default.resolve(__dirname, '../../', file);
}