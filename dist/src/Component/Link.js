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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @module reactors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @name Link
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @type Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

var ReactorsLink = function (_Component) {
  _inherits(ReactorsLink, _Component);

  function ReactorsLink() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactorsLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ReactorsLink)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.go = function () {
      _reactNative.Linking.openURL(_this.props.href);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactorsLink, [{
    key: 'render',
    value: function render() {
      switch (_reactors2.default.platform) {
        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);
        case 'mobile':
          return this._renderMobile();
        case 'web':
        case 'desktop':
          return this._renderWeb();
      }
    }
  }, {
    key: '_renderMobile',
    value: function _renderMobile() {
      return _react2.default.createElement(
        _reactNative.TouchableHighlight,
        {
          onPress: this.go,
          style: new _reactors.StyleRule(this.props.style),
          underlayColor: 'rgba(255, 255, 255, 0)'
        },
        _react2.default.createElement(
          _reactNative.View,
          null,
          this.props.children
        )
      );
    }
  }, {
    key: '_renderWeb',
    value: function _renderWeb() {
      var props = _extends({}, this.props);
      if (props.onPress) {
        props.onClick = props.onPress;
      }
      if (props.style) {
        props.style = new _reactors.StyleRule(props.style);
      }
      return _react2.default.createElement(
        'a',
        props,
        this.props.children
      );
    }
  }]);

  return ReactorsLink;
}(_react.Component);

ReactorsLink.propTypes = {
  href: _react.PropTypes.string
};
exports.default = ReactorsLink;