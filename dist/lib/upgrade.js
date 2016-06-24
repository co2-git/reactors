'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _read = require('./read');

var _read2 = _interopRequireDefault(_read);

var _write = require('./write');

var _write2 = _interopRequireDefault(_write);

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

var migrations = [{ version: '0.1.4', migrate: _v2.default }];

var base = (0, _getAppFile2.default)('');

if (/\/node_modules\/reactors$/.test(base)) {
  base = base.replace(/\/node_modules\/reactors$/, '');
}

function getFile(file) {
  return _path2.default.join(base, file);
}

exports.default = function () {
  return new Promise(function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              return _context2.delegateYield(regeneratorRuntime.mark(function _callee() {
                var reactors, first_time, versions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, version;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        reactors = void 0;
                        first_time = false;
                        _context.prev = 2;
                        _context.next = 5;
                        return (0, _read2.default)(getFile('reactors.json'));

                      case 5:
                        reactors = _context.sent;

                        reactors = JSON.parse(reactors);
                        _context.next = 13;
                        break;

                      case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](2);

                        first_time = true;
                        reactors = {
                          version: _package2.default.version
                        };

                      case 13:
                        versions = migrations.filter(function (migration) {
                          return _semver2.default.gt(migration.version, reactors.version) && _semver2.default.lte(migration.version, _package2.default.version);
                        });
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 17;
                        _iterator = versions[Symbol.iterator]();

                      case 19:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                          _context.next = 26;
                          break;
                        }

                        version = _step.value;
                        _context.next = 23;
                        return version.migrate();

                      case 23:
                        _iteratorNormalCompletion = true;
                        _context.next = 19;
                        break;

                      case 26:
                        _context.next = 32;
                        break;

                      case 28:
                        _context.prev = 28;
                        _context.t1 = _context['catch'](17);
                        _didIteratorError = true;
                        _iteratorError = _context.t1;

                      case 32:
                        _context.prev = 32;
                        _context.prev = 33;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }

                      case 35:
                        _context.prev = 35;

                        if (!_didIteratorError) {
                          _context.next = 38;
                          break;
                        }

                        throw _iteratorError;

                      case 38:
                        return _context.finish(35);

                      case 39:
                        return _context.finish(32);

                      case 40:
                        if (!first_time) {
                          _context.next = 45;
                          break;
                        }

                        _context.next = 43;
                        return (0, _write2.default)(getFile('reactors.json'), JSON.stringify(reactors, null, 2));

                      case 43:
                        _context.next = 47;
                        break;

                      case 45:
                        _context.next = 47;
                        return (0, _changeJSON2.default)(getFile('reactors.json'), function (json) {
                          json.version = _package2.default.version;
                        });

                      case 47:
                        resolve();

                      case 48:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined, [[2, 9], [17, 28, 32, 40], [33,, 35, 39]]);
              })(), 't0', 2);

            case 2:
              _context2.next = 7;
              break;

            case 4:
              _context2.prev = 4;
              _context2.t1 = _context2['catch'](0);

              reject(_context2.t1);

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 4]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
};