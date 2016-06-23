'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAppFile;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAppFile(file, app) {
  return _path2.default.resolve(process.cwd(), app, file);
}