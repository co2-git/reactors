'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _logger = require('../lib/logger');

var _logger2 = _interopRequireDefault(_logger);

var _copy = require('../lib/copy');

var _copy2 = _interopRequireDefault(_copy);

var _changeJSON = require('../lib/changeJSON');

var _changeJSON2 = _interopRequireDefault(_changeJSON);

var _getAppFile = require('../lib/getAppFile');

var _getAppFile2 = _interopRequireDefault(_getAppFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _logger2.default)('Updating web pack config');

            case 3:
              _context.next = 5;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/webpack.config.js'), (0, _getAppFile2.default)('webpack.config.js'));

            case 5:
              _context.next = 7;
              return (0, _logger2.default)('Updating desktop index.html');

            case 7:
              _context.next = 9;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/index.desktop.html'), (0, _getAppFile2.default)('desktop/index.html'));

            case 9:
              _context.next = 11;
              return (0, _logger2.default)('Updating desktop index.js');

            case 11:
              _context.next = 13;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/index.desktop.js'), (0, _getAppFile2.default)('index.desktop.js'));

            case 13:
              _context.next = 15;
              return (0, _logger2.default)('Updating electron index.js');

            case 15:
              _context.next = 17;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/index.electron.js'), (0, _getAppFile2.default)('index.electron.js'));

            case 17:
              _context.next = 19;
              return (0, _logger2.default)('Updating dom index.js');

            case 19:
              _context.next = 21;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/index.dom.js'), _path2.default.join(__dirname, '/v0.1.4/index.dom.js'));

            case 21:
              _context.next = 23;
              return (0, _logger2.default)('Updating web index.html');

            case 23:
              _context.next = 25;
              return (0, _copy2.default)(_path2.default.join(__dirname, '/v0.1.4/index.html'), (0, _getAppFile2.default)('index.html'));

            case 25:
              _context.next = 27;
              return (0, _logger2.default)('Change main in package.json for electron');

            case 27:
              _context.next = 29;
              return (0, _changeJSON2.default)((0, _getAppFile2.default)('package.json'), function (json) {
                json.main = 'index.electron.js';
              });

            case 29:
              _context.next = 34;
              break;

            case 31:
              _context.prev = 31;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 34:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 31]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
};