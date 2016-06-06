'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactor = require('reactor');

var _reactor2 = _interopRequireDefault(_reactor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactorStyleSheet = function () {
  function ReactorStyleSheet() {
    _classCallCheck(this, ReactorStyleSheet);
  }

  _createClass(ReactorStyleSheet, null, [{
    key: 'create',
    value: function create(style) {
      switch (_reactor2.default.platform) {
        case 'mobile':
          return _reactNative.StyleSheet.create(style);
        default:
          return style;
      }
    }
  }]);

  return ReactorStyleSheet;
}();

exports.default = ReactorStyleSheet;