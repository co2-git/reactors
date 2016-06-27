'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (children) {
  var _children = Array.isArray(children) ? children : [children];

  return _children.filter(function (child) {
    return child;
  }).map(function (child, index) {
    var props = {};

    if (child.key === null) {
      props.key = index;
    }
    // if (child.type && child.type.name === 'ReactorsScrollView') {
    //   this.style.overflow = 'auto';
    // }

    return _react2.default.cloneElement(child, props);
  });
};