'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _promiseSequencer = require('promise-sequencer');

var _promiseSequencer2 = _interopRequireDefault(_promiseSequencer);

var _exec = require('../lib/exec');

var _exec2 = _interopRequireDefault(_exec);

var _transform = require('../lib/transform');

var _transform2 = _interopRequireDefault(_transform);

var _write = require('../lib/write');

var _write2 = _interopRequireDefault(_write);

var _npmInstall = require('../lib/npmInstall');

var _npmInstall2 = _interopRequireDefault(_npmInstall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocalFile(file) {
  return _path2.default.resolve(__dirname, '../../app', file);
}

function init(app) {
  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return _path2.default.resolve(process.cwd(), app, file);
  }

  function logger(message) {
    return new Promise(function (resolve, reject) {});
  }

  return (0, _promiseSequencer2.default)(function () {
    return (0, _exec2.default)('react-native init ' + app);
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.mobile.js'), transformer, getAppFile('index.ios.js'));
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.mobile.js'), transformer, getAppFile('index.android.js'));
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.html'), transformer, getAppFile('index.html'));
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/web/');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.web.js'), transformer, getAppFile('index.web.js'));
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/app/');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/app/App.js'), transformer, getAppFile('app/App.js'));
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/webpack.config.js'), transformer, getAppFile('webpack.config.js'));
  }, function () {
    return (0, _npmInstall2.default)(app, 'reactors', 'react-dom', 'babel-loader', 'webpack', 'babel-preset-react', 'babel-preset-stage-0', 'ignore-loader');
  }, function () {
    return (0, _exec2.default)('mkdir -p ' + app + '/assets/js');
  });
}