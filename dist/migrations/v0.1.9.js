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

var _getAppFile = require('../lib/getAppFile');

var _getAppFile2 = _interopRequireDefault(_getAppFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function getTemplate(file) {
  return _path2.default.join(__dirname, '../../templates/migrations/v0.1.9/' + file);
}

exports.default = function () {
  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _logger2.default)('UPGRADING TO v0.1.9');

            case 3:
              _context.next = 5;
              return (0, _logger2.default)('Updating desktop index.js');

            case 5:
              _context.next = 7;
              return (0, _copy2.default)(getTemplate('index.desktop.js'), (0, _getAppFile2.default)('index.desktop.js'));

            case 7:
              _context.next = 9;
              return (0, _logger2.default)('Updating dom index.js');

            case 9:
              _context.next = 11;
              return (0, _copy2.default)(getTemplate('index.dom.js'), (0, _getAppFile2.default)('index.dom.js'));

            case 11:
              _context.next = 13;
              return (0, _logger2.default)('Updating mobile index.js');

            case 13:
              _context.next = 15;
              return (0, _copy2.default)(getTemplate('index.mobile.js'), (0, _getAppFile2.default)('index.mobile.js'));

            case 15:
              _context.next = 17;
              return (0, _logger2.default)('Updating web index.js');

            case 17:
              _context.next = 19;
              return (0, _copy2.default)(getTemplate('index.web.js'), (0, _getAppFile2.default)('index.web.js'));

            case 19:

              resolve();
              _context.next = 25;
              break;

            case 22:
              _context.prev = 22;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 25:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 22]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
};