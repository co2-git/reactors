'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @module reactors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @name StyleSheet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @type Class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **/

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stringifyTransformers(transformers) {
  return transformers.map(function (transformer) {
    var key = Object.keys(transformer);
    return key + '(' + transformer[key] + ')';
  }).join(' ');
}

var ReactorsStyleSheet = function () {
  function ReactorsStyleSheet() {
    _classCallCheck(this, ReactorsStyleSheet);
  }

  _createClass(ReactorsStyleSheet, null, [{
    key: 'create',
    value: function create(style) {
      switch (_reactors2.default.platform) {
        case 'mobile':
          return _reactNative.StyleSheet.create(style);
        default:
          {
            var _style = _extends({}, style);
            for (var rule in _style) {
              if (_style[rule]) {
                var _rule = _style[rule];
                if (_rule.borderWidth && !_rule.borderStyle) {
                  _rule.borderStyle = 'solid';
                }
                if (_rule.flexDirection) {
                  _rule.display = 'flex';
                }
                if (_rule.transform) {
                  _rule.transform = stringifyTransformers(_rule.transform);
                }
              }
            }
            return _style;
          }
      }
    }
  }]);

  return ReactorsStyleSheet;
}();

exports.default = ReactorsStyleSheet;