'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      var templatesToTransform, templatesToCopy, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, template, local, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _template, _local;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              templatesToTransform = [{ 'index.mobile.js': 'index.ios.js' }, { 'index.mobile.js': 'index.android.js' }, 'index.html', 'index.web.js', 'index.dom.js', 'index.desktop.js', 'app/App.js', 'webpack.config.js', _defineProperty({}, 'index.desktop.html', 'desktop/index.html')];
              templatesToCopy = ['index.electron.js'];
              _context.next = 5;
              return (0, _logger2.default)('Installing React Native');

            case 5:
              _context.next = 7;
              return (0, _exec2.default)('react-native init ' + app);

            case 7:
              _context.next = 9;
              return _logger2.default.ok('React Native installed');

            case 9:
              _context.next = 11;
              return (0, _logger2.default)('Create app directories');

            case 11:
              _context.next = 13;
              return (0, _exec2.default)('mkdir ' + app + '/app/');

            case 13:
              _context.next = 15;
              return (0, _exec2.default)('mkdir ' + app + '/desktop/');

            case 15:
              _context.next = 17;
              return (0, _logger2.default)('Install templates');

            case 17:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 20;
              _iterator = templatesToTransform[Symbol.iterator]();

            case 22:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 41;
                break;
              }

              template = _step.value;

              if (!(typeof template === 'string')) {
                _context.next = 29;
                break;
              }

              _context.next = 27;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/' + template), transformer, getAppFile(template));

            case 27:
              _context.next = 38;
              break;

            case 29:
              if (!((typeof template === 'undefined' ? 'undefined' : _typeof(template)) === 'object')) {
                _context.next = 38;
                break;
              }

              _context.t0 = regeneratorRuntime.keys(template);

            case 31:
              if ((_context.t1 = _context.t0()).done) {
                _context.next = 38;
                break;
              }

              local = _context.t1.value;

              if (!template[local]) {
                _context.next = 36;
                break;
              }

              _context.next = 36;
              return (0, _transform2.default)((0, _getLocalFile2.default)('templates/' + local), transformer, getAppFile(template[local]));

            case 36:
              _context.next = 31;
              break;

            case 38:
              _iteratorNormalCompletion = true;
              _context.next = 22;
              break;

            case 41:
              _context.next = 47;
              break;

            case 43:
              _context.prev = 43;
              _context.t2 = _context['catch'](20);
              _didIteratorError = true;
              _iteratorError = _context.t2;

            case 47:
              _context.prev = 47;
              _context.prev = 48;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 50:
              _context.prev = 50;

              if (!_didIteratorError) {
                _context.next = 53;
                break;
              }

              throw _iteratorError;

            case 53:
              return _context.finish(50);

            case 54:
              return _context.finish(47);

            case 55:
              _iteratorNormalCompletion2 = true;
              _didIteratorError2 = false;
              _iteratorError2 = undefined;
              _context.prev = 58;
              _iterator2 = templatesToCopy[Symbol.iterator]();

            case 60:
              if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                _context.next = 79;
                break;
              }

              _template = _step2.value;

              if (!(typeof _template === 'string')) {
                _context.next = 67;
                break;
              }

              _context.next = 65;
              return (0, _copy2.default)((0, _getLocalFile2.default)('templates/' + _template), getAppFile(_template));

            case 65:
              _context.next = 76;
              break;

            case 67:
              if (!((typeof _template === 'undefined' ? 'undefined' : _typeof(_template)) === 'object')) {
                _context.next = 76;
                break;
              }

              _context.t3 = regeneratorRuntime.keys(_template);

            case 69:
              if ((_context.t4 = _context.t3()).done) {
                _context.next = 76;
                break;
              }

              _local = _context.t4.value;

              if (!_template[_local]) {
                _context.next = 74;
                break;
              }

              _context.next = 74;
              return (0, _copy2.default)((0, _getLocalFile2.default)('templates/' + _local), getAppFile(_template[_local]));

            case 74:
              _context.next = 69;
              break;

            case 76:
              _iteratorNormalCompletion2 = true;
              _context.next = 60;
              break;

            case 79:
              _context.next = 85;
              break;

            case 81:
              _context.prev = 81;
              _context.t5 = _context['catch'](58);
              _didIteratorError2 = true;
              _iteratorError2 = _context.t5;

            case 85:
              _context.prev = 85;
              _context.prev = 86;

              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }

            case 88:
              _context.prev = 88;

              if (!_didIteratorError2) {
                _context.next = 91;
                break;
              }

              throw _iteratorError2;

            case 91:
              return _context.finish(88);

            case 92:
              return _context.finish(85);

            case 93:
              _context.next = 95;
              return (0, _logger2.default)('Installing npm dependencies');

            case 95:
              _context.next = 97;
              return (0, _npmInstall2.default)(app, 'reactors', 'react-dom', 'babel-loader', 'webpack', 'babel-preset-react', 'babel-preset-es2015', 'babel-preset-stage-0', 'ignore-loader');

            case 97:
              _context.next = 99;
              return (0, _logger2.default)('Updating package.json');

            case 99:
              _context.next = 101;
              return (0, _changeJSON2.default)(getAppFile('package.json'), function (json) {
                json.main = 'index.desktop.js';
              });

            case 101:
              _context.next = 103;
              return (0, _logger2.default)('create reactors.json');

            case 103:
              _context.next = 105;
              return (0, _write2.default)(getAppFile('reactors.json'), JSON.stringify({ version: _package2.default.version }));

            case 105:
              _context.next = 107;
              return _logger2.default.ok('Reactors app ' + app + ' successfully created');

            case 107:
              _context.next = 112;
              break;

            case 109:
              _context.prev = 109;
              _context.t6 = _context['catch'](0);

              reject(_context.t6);

            case 112:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 109], [20, 43, 47, 55], [48,, 50, 54], [58, 81, 85, 93], [86,, 88, 92]]);
    }));

    return function (_x, _x2) {
      return ref.apply(this, arguments);
    };
  }());
}