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

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLocalFile(file) {
  return _path2.default.resolve(__dirname, '../../', file);
}

function init(app) {
  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return _path2.default.resolve(process.cwd(), app, file);
  }

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

  return (0, _promiseSequencer2.default)(function () {
    return logger('Installing React Native');
  }, function () {
    return (0, _exec2.default)('react-native init ' + app);
  }, function () {
    return logger.ok('React Native installed');
  }, function () {
    return logger('Update mobile indexes');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.mobile.js'), transformer, getAppFile('index.ios.js'));
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.mobile.js'), transformer, getAppFile('index.android.js'));
  }, function () {
    return logger('Create html for the web');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.html'), transformer, getAppFile('index.html'));
  }, function () {
    return logger('Create JS for the web');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.web.js'), transformer, getAppFile('index.web.js'));
  }, function () {
    return logger('Create app directory');
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/app/');
  }, function () {
    return logger('Create App');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/app/App.js'), transformer, getAppFile('app/App.js'));
  }, function () {
    return logger('Create webpack config file for web/desktop');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/webpack.config.js'), transformer, getAppFile('webpack.config.js'));
  }, function () {
    return logger('Create desktop directory');
  }, function () {
    return (0, _exec2.default)('mkdir ' + app + '/desktop/');
  }, function () {
    return logger('Create html for desktop');
  }, function () {
    return (0, _transform2.default)(getLocalFile('templates/index.desktop.html'), transformer, getAppFile('desktop/index.html'));
  }, function () {
    return logger('Create JS for desktop');
  }, function () {
    return (0, _copy2.default)(getLocalFile('templates/index.desktop.js'), getAppFile('index.desktop.js'));
  }, function () {
    return logger('Installing npm dependencies');
  }, function () {
    return (0, _npmInstall2.default)(app, 'reactors', 'react-dom', 'babel-loader', 'webpack', 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0', 'ignore-loader');
  }, function () {
    return logger('Updating package.json');
  }, function () {
    return (0, _changeJSON2.default)(getAppFile('package.json'), function (json) {
      json.main = 'index.desktop.js';
    });
  }, function () {
    return logger.ok('Reactors app ' + app + ' successfully created');
  });
}