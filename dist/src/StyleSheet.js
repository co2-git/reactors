'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
          for (var rule in style) {
            if (style[rule].borderWidth && !style[rule].borderStyle) {
              style[rule].borderStyle = 'solid';
            }
          }
          return style;
      }
    }
  }]);

  return ReactorsStyleSheet;
}();

exports.default = ReactorsStyleSheet;