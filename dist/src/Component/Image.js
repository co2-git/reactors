'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @name Image
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @type Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

var ReactorsImage = function (_Component) {
  _inherits(ReactorsImage, _Component);

  function ReactorsImage() {
    _classCallCheck(this, ReactorsImage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactorsImage).apply(this, arguments));
  }

  _createClass(ReactorsImage, [{
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props);

      switch (_reactors2.default.platform) {
        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);
        case 'mobile':
          if (typeof props.source === 'string') {
            props.source = { uri: props.source };
          }
          return _react2.default.createElement(_reactNative.Image, props);
        case 'web':
        case 'desktop':
          props.src = props.source;
          if (_typeof(props.src) === 'object' && props.src.uri) {
            props.src = props.src.uri;
          }
          return _react2.default.createElement('img', props);
      }
    }
  }]);

  return ReactorsImage;
}(_react.Component);

exports.default = ReactorsImage;