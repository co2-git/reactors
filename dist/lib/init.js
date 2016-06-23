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

var _changeJSON = require('../lib/changeJSON');

var _changeJSON2 = _interopRequireDefault(_changeJSON);

var _npmInstall = require('../lib/npmInstall');

var _npmInstall2 = _interopRequireDefault(_npmInstall);

var _copy = require('../lib/copy');

var _copy2 = _interopRequireDefault(_copy);

var _logger = require('../lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _getLocalFile = require('../lib/getLocalFile');

var _getLocalFile2 = _interopRequireDefault(_getLocalFile);

var _getAppFile2 = require('../lib/getAppFile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(app) {
  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return (0, _getAppFile2.getAppFile)(file, app);
  }

  return (0, _promiseSequencer2.default)(function () {
    return (0, _logger2.default)('Installing React Native');
  }, function () {
    return (0, _exec2.default)('react-native init ' + app);
  }, function () {
    return _logger2.default.ok('React Native installed');
  }, function () {
    return (0, _logger2.default)('Update mobile indexes');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.mobile.js'), transformer, getAppFile('index.ios.js'));
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.mobile.js'), transformer, getAppFile('index.android.js'));
  }, function () {
    return (0, _logger2.default)('Create html for the web');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.html'), transformer, getAppFile('index.html'));
  }, function () {
    return (0, _logger2.default)('Create JS for the web');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.web.js'), transformer, getAppFile('index.web.js'));
  }, function () {
    return (0, _logger2.default)('Create app directory');
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/app/');
  }, function () {
    return (0, _logger2.default)('Create App');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/app/App.js'), transformer, getAppFile('app/App.js'));
  }, function () {
    return (0, _logger2.default)('Create webpack config file for web/desktop');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/webpack.config.js'), transformer, getAppFile('webpack.config.js'));
  }, function () {
    return (0, _logger2.default)('Create desktop directory');
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/desktop/');
  }, function () {
    return (0, _logger2.default)('Create html for desktop');
  }, function () {
    return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.desktop.html'), transformer, getAppFile('desktop/index.html'));
  }, function () {
    return (0, _logger2.default)('Create JS for desktop');
  }, function () {
    return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.desktop.js'), getAppFile('index.desktop.js'));
  }, function () {
    return (0, _logger2.default)('Create DOM html');
  }, function () {
    return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.dom.html'), getAppFile('index.dom.html'));
  }, function () {
    return (0, _logger2.default)('Create electron index');
  }, function () {
    return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.electron.js'), getAppFile('index.electron.js'));
  }, function () {
    return (0, _logger2.default)('Installing npm dependencies');
  }, function () {
    return (0, _npmInstall2.default)(app, 'reactors', 'react-dom', 'babel-loader', 'webpack', 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0', 'ignore-loader');
  }, function () {
    return (0, _logger2.default)('Updating package.json');
  }, function () {
    return (0, _changeJSON2.default)(getAppFile('package.json'), function (json) {
      json.main = 'index.desktop.js';
    });
  }, function () {
    return _logger2.default.ok('Reactors app ' + app + ' successfully created');
  });
}