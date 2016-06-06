'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _reactor = require('reactor');

var _reactor2 = _interopRequireDefault(_reactor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactor2.default.platform = 'web';

var props = {};

_reactDom2.default.render(React.createElement(_App2.default, props), document.getElementById('reactor'));