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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @name View
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * @type Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               **/

var ReactorsView = function (_Component) {
  _inherits(ReactorsView, _Component);

  function ReactorsView() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactorsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ReactorsView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.style = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactorsView, [{
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;

      var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

      return children.filter(function (child) {
        return child;
      }).map(function (child, index) {
        var props = {};

        if (child.key === null) {
          props.key = index;
        }

        if (child.type.name === 'ReactorsScrollView') {
          _this2.style.overflow = 'auto';
        }

        return _react2.default.cloneElement(child, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _extends({}, this.props);

      switch (_reactors2.default.platform) {
        default:
          throw new Error('Unknown platform: ' + _reactors2.default.platform);
        case 'mobile':
          return _react2.default.createElement(
            _reactNative.View,
            props,
            this.props.children
          );
        case 'web':
        case 'desktop':
          return this._renderWeb();
      }
    }
  }, {
    key: '_renderWeb',
    value: function _renderWeb() {
      var props = _extends({}, this.props);
      var children = this.renderChildren();
      var style = {};
      if (this.props.style) {
        style = this.props.style;
      }
      return _react2.default.createElement(
        'section',
        _extends({}, props, { style: _extends({}, style, this.style) }),
        children
      );
    }
  }]);

  return ReactorsView;
}(_react.Component);

ReactorsView.propTypes = {
  accessibilitylabel: _react.PropTypes.string
};
exports.default = ReactorsView;