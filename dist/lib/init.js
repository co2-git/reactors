'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

require('babel-polyfill');

var _exec = require('../lib/exec');

var _exec2 = _interopRequireDefault(_exec);

var _transform = require('../lib/transform');

var _transform2 = _interopRequireDefault(_transform);

var _changeJSON = require('../lib/changeJSON');

var _changeJSON2 = _interopRequireDefault(_changeJSON);

var _npmInstall = require('../lib/npmInstall');

var _npmInstall2 = _interopRequireDefault(_npmInstall);

var _write = require('../lib/write');

var _write2 = _interopRequireDefault(_write);

var _copy = require('../lib/copy');

var _copy2 = _interopRequireDefault(_copy);

var _logger = require('../lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _getLocalFile = require('../lib/getLocalFile');

var _getLocalFile2 = _interopRequireDefault(_getLocalFile);

var _getAppFile2 = require('../lib/getAppFile');

var _getAppFile3 = _interopRequireDefault(_getAppFile2);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function init(app) {
  var _this = this;

  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return (0, _getAppFile3.default)(file, app);
  }

  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _logger2.default)('Installing React Native');

            case 3:
              _context.next = 5;
              return (0, _exec2.default)('react-native init ' + app);

            case 5:
              _context.next = 7;
              return _logger2.default.ok('React Native installed');

            case 7:
              _context.next = 9;
              return (0, _logger2.default)('Update mobile indexes');

            case 9:
              _context.next = 11;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.mobile.js'), transformer, getAppFile('index.ios.js'));

            case 11:
              _context.next = 13;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.mobile.js'), transformer, getAppFile('index.android.js'));

            case 13:
              _context.next = 15;
              return (0, _logger2.default)('Create html for the web');

            case 15:
              _context.next = 17;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.html'), transformer, getAppFile('index.html'));

            case 17:
              _context.next = 19;
              return (0, _logger2.default)('Create JS for the web');

            case 19:
              _context.next = 21;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.web.js'), transformer, getAppFile('index.web.js'));

            case 21:
              _context.next = 23;
              return (0, _logger2.default)('Create app directory');

            case 23:
              _context.next = 25;
              return (0, _exec2.default)('mkdir ' + app + '/app/');

            case 25:
              _context.next = 27;
              return (0, _logger2.default)('Create App');

            case 27:
              _context.next = 29;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/app/App.js'), transformer, getAppFile('app/App.js'));

            case 29:
              _context.next = 31;
              return (0, _logger2.default)('Create webpack config file for web/desktop');

            case 31:
              _context.next = 33;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/webpack.config.js'), transformer, getAppFile('webpack.config.js'));

            case 33:
              _context.next = 35;
              return (0, _logger2.default)('Create desktop directory');

            case 35:
              _context.next = 37;
              return (0, _exec2.default)('mkdir ' + app + '/desktop/');

            case 37:
              _context.next = 39;
              return (0, _logger2.default)('Create html for desktop');

            case 39:
              _context.next = 41;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/index.desktop.html'), transformer, getAppFile('desktop/index.html'));

            case 41:
              _context.next = 43;
              return (0, _logger2.default)('Create JS for desktop');

            case 43:
              _context.next = 45;
              return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.desktop.js'), getAppFile('index.desktop.js'));

            case 45:
              _context.next = 47;
              return (0, _logger2.default)('Create DOM html');

            case 47:
              _context.next = 49;
              return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.dom.html'), getAppFile('index.dom.html'));

            case 49:
              _context.next = 51;
              return (0, _logger2.default)('Create electron index');

            case 51:
              _context.next = 53;
              return (0, _copy2.default)((0, _getLocalFile2.default)('templates/index.electron.js'), getAppFile('index.electron.js'));

            case 53:
              _context.next = 55;
              return (0, _logger2.default)('Installing npm dependencies');

            case 55:
              _context.next = 57;
              return (0, _npmInstall2.default)(app, 'reactors', 'react-dom', 'babel-loader', 'webpack', 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0', 'ignore-loader');

            case 57:
              _context.next = 59;
              return (0, _logger2.default)('Updating package.json');

            case 59:
              _context.next = 61;
              return (0, _changeJSON2.default)(getAppFile('package.json'), function (json) {
                json.main = 'index.desktop.js';
              });

            case 61:
              _context.next = 63;
              return (0, _logger2.default)('create reactors.json');

            case 63:
              _context.next = 65;
              return (0, _write2.default)(getAppFile('reactors.json'), JSON.stringify({ version: _package2.default.version }));

            case 65:
              _context.next = 67;
              return _logger2.default.ok('Reactors app ' + app + ' successfully created');

            case 67:
              _context.next = 72;
              break;

            case 69:
              _context.prev = 69;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 72:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 69]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
}