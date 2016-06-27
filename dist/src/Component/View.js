'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

var _mobile = require('./View/mobile');

var _mobile2 = _interopRequireDefault(_mobile);

var _web = require('./View/web');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @module reactors
  * @name View
  * @type Component
  * 
**/

exports.default = function (props) {
  switch (_reactors2.default.platform) {
    default:
      throw new Error('Unknown platform: ' + _reactors2.default.platform);
    case 'mobile':
      return (0, _mobile2.default)(props);
    case 'web':
    case 'desktop':
      return (0, _web2.default)(props);
  }
};