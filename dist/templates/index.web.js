'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactors2.default.platform = 'web';

var props = {};

_reactDom2.default.render(_react2.default.createElement(_App2.default, props), document.getElementById('reactors'));