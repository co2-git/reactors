'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _changeJSON = require('./changeJSON');

var _changeJSON2 = _interopRequireDefault(_changeJSON);

var _getAppFile = require('./getAppFile');

var _getAppFile2 = _interopRequireDefault(_getAppFile);

var _v = require('../migrations/v0.1.4');

var _v2 = _interopRequireDefault(_v);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var versions = {
  '0.1.4': _v2.default
};

exports.default = function () {
  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              return _context3.delegateYield(regeneratorRuntime.mark(function _callee2() {
                var reactors, updatable;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        reactors = void 0;
                        _context2.prev = 1;
                        _context2.next = 4;
                        return (0, _read2.default)((0, _getAppFile2.default)('reactors.json'));

                      case 4:
                        reactors = _context2.sent;
                        _context2.next = 10;
                        break;

                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2['catch'](1);

                        reactors = {};

                      case 10:
                        updatable = versions.filter(function (version) {
                          return _semver2.default.gt(version, reactors.version) && _semver2.default.lte(version, _package2.default.version);
                        });

                        updatable.forEach(function () {
                          var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(fn) {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return fn();

                                  case 2:
                                    return _context.abrupt('return', _context.sent);

                                  case 3:
                                  case 'end':
                                    return _context.stop();
                                }
                              }
                            }, _callee, undefined);
                          }));

                          return function (_x3) {
                            return ref.apply(this, arguments);
                          };
                        }());
                        _context2.next = 14;
                        return (0, _changeJSON2.default)((0, _getAppFile2.default)('reactors.json'), function (json) {
                          json.version = _package2.default.version;
                        });

                      case 14:
                        resolve();

                      case 15:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined, [[1, 7]]);
              })(), 't0', 2);

            case 2:
              _context3.next = 7;
              break;

            case 4:
              _context3.prev = 4;
              _context3.t1 = _context3['catch'](0);

              reject(_context3.t1);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 4]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
};