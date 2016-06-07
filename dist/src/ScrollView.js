'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactorsScrollView = function (_Component) {
  _inherits(ReactorsScrollView, _Component);

  function ReactorsScrollView() {
    _classCallCheck(this, ReactorsScrollView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactorsScrollView).apply(this, arguments));
  }

  _createClass(ReactorsScrollView, [{
    key: 'render',
    value: function render() {
      switch (_reactors2.default.platform) {
        case 'mobile':
          return _react2.default.createElement(
            _reactNative.ScrollView,
            this.props,
            this.props.children
          );
        case 'web':
          var style = {
            overflow: 'auto'
          };
          return _react2.default.createElement(
            'section',
            _extends({ style: style }, this.props),
            this.props.children
          );
      }
    }
  }]);

  return ReactorsScrollView;
}(_react.Component);

exports.default = ReactorsScrollView;