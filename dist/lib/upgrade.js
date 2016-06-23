'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upgrade;

require('babel-polyfill');

var _promiseSequencer = require('promise-sequencer');

var _promiseSequencer2 = _interopRequireDefault(_promiseSequencer);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _getAppFile = require('./getAppFile');

var _getAppFile2 = _interopRequireDefault(_getAppFile);

var _v = require('../migrations/v0.1.4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function upgrade() {
  var _this = this;

  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(resolve, reject) {
      var pkg, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _read2.default)((0, _getAppFile2.default)('node_modules/reactors/package.json'));

            case 3:
              pkg = _context.sent;
              json = JSON.parse(pkg);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 7]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
}