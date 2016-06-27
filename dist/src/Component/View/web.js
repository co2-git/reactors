'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _renderChildren = require('../../../lib/renderChildren');

var _renderChildren2 = _interopRequireDefault(_renderChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var webProps = _extends({}, props);
  if (webProps.onPress) {
    webProps.onClick = webProps.onPress;
  }
  return _react2.default.createElement(
    'section',
    webProps,
    (0, _renderChildren2.default)(props.children)
  );
};