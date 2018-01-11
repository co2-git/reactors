'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _describeReact = require('@francoisv/describe-react');

var _props = require('../../../dist/API/Core/props');

var _props2 = _interopRequireDefault(_props);

var _Core = require('../../../dist/API/Core');

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setPlatformToMobile = function setPlatformToMobile() {
  _Core2.default.platform = 'mobile';
};

var setPlatformToWeb = function setPlatformToWeb() {
  _Core2.default.platform = 'web';
};

var style = function style(styleProps) {
  return (0, _props2.default)({ style: styleProps });
};

var onPress = function onPress() {};

exports.default = function () {
  return _react2.default.createElement(
    _describeReact.Describe,
    { label: 'Reactors props' },
    _react2.default.createElement(_describeReact.Expect, { value: _props2.default, isAFunction: true }),
    _react2.default.createElement(
      _describeReact.Describe,
      { label: 'it should return correct props' },
      _react2.default.createElement(_describeReact.Expect, { 'function': function _function() {
          return (0, _props2.default)({ foo: 1 });
        }, 'return': { foo: 1 } })
    ),
    _react2.default.createElement(
      _describeReact.Describe,
      { label: 'Gestures' },
      _react2.default.createElement(
        _describeReact.Describe,
        { label: 'DOM' },
        _react2.default.createElement(_describeReact.Run, { script: setPlatformToWeb }),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: 'onPress should be transformed to onClick' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return (0, _props2.default)({ onPress: onPress });
            },
            'return': { onClick: onPress }
          })
        )
      )
    ),
    _react2.default.createElement(
      _describeReact.Describe,
      { label: 'Styles' },
      _react2.default.createElement(
        _describeReact.Describe,
        { label: 'Merge styles - accept arrays and objects' },
        _react2.default.createElement(_describeReact.Expect, {
          'function': function _function() {
            return style([{ margin: 10 }, { padding: 5 }, { padding: 4 }]);
          },
          'return': { style: { margin: 10, padding: 4 } }
        })
      ),
      _react2.default.createElement(
        _describeReact.Describe,
        { label: 'Mobile' },
        _react2.default.createElement(_describeReact.Run, { script: setPlatformToMobile }),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{display: flex} = {flexDirection: row}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ display: 'flex' });
            },
            'return': { style: { flexDirection: 'row' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{display: flex, flexDirection: column} = {flexDirection: column}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ display: 'flex', flexDirection: 'column' });
            },
            'return': { style: { flexDirection: 'column' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{cursor: *} = {}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ cursor: 'pointer' });
            },
            'return': { style: {} }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: matrix(1, 2, 3)} = {transform: []}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'matrix(1, 2,3)' });
            },
            'return': { style: { transform: [] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: translate(120px, 50%)} = {transform: [{translateX: 120}, {translateY: \'50%\'}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'translate(120px, 50%)' });
            },
            'return': { style: { transform: [{ translateX: 120 }, { translateY: '50%' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: translateX(120px)} = {transform: [{translateX: 120}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'translateX(120px)' });
            },
            'return': { style: { transform: [{ translateX: 120 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: translateY(120px)} = {transform: [{translateY: 120}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'translateY(120px)' });
            },
            'return': { style: { transform: [{ translateY: 120 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: perspective(1)} = {transform: [{perspective: 1}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'perspective(1)' });
            },
            'return': { style: { transform: [{ perspective: 1 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: rotate(0.5turn)} = {transform: [{rotate: 0.5turn}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'rotate(0.5turn)' });
            },
            'return': { style: { transform: [{ rotate: '0.5turn' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: rotateX(0.5turn)} = {transform: [{rotateX: 0.5turn}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'rotateX(0.5turn)' });
            },
            'return': { style: { transform: [{ rotateX: '0.5turn' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: rotateY(0.5turn)} = {transform: [{rotateY: 0.5turn}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'rotateY(0.5turn)' });
            },
            'return': { style: { transform: [{ rotateY: '0.5turn' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: rotateZ(0.5turn)} = {transform: [{rotateZ: 0.5turn}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'rotateZ(0.5turn)' });
            },
            'return': { style: { transform: [{ rotateZ: '0.5turn' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: scale(2, 0.5} = {transform: [{scaleX: 2, scaleY: 0.5}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'scale(2, 0.5)' });
            },
            'return': { style: { transform: [{ scaleX: 2 }, { scaleY: 0.5 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: scaleX(2} = {transform: [{scaleX: 2}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'scaleX(2)' });
            },
            'return': { style: { transform: [{ scaleX: 2 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: scaleY(2} = {transform: [{scaleY: 2}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'scaleY(2)' });
            },
            'return': { style: { transform: [{ scaleY: 2 }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: skew(30deg, 20deg} = {transform: [{skewX: 30deg, skewY: 20deg}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'skew(30deg, 20deg)' });
            },
            'return': { style: { transform: [{ skewX: '30deg' }, { skewY: '20deg' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: skewX(20deg} = {transform: [{skewX: 20deg}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'skewX(20deg)' });
            },
            'return': { style: { transform: [{ skewX: '20deg' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: skewY(30deg} = {transform: [{skewY: 30deg}]}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: 'skewY(30deg)' });
            },
            'return': { style: { transform: [{ skewY: '30deg' }] } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transition: margin 1s} = {}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transition: 'margin 1s' });
            },
            'return': { style: {} }
          })
        )
      ),
      _react2.default.createElement(
        _describeReact.Describe,
        { label: 'Web' },
        _react2.default.createElement(_describeReact.Run, { script: setPlatformToWeb }),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{borderWidth: 1} = {borderWidth: 1, borderStyle: solid, borderColor: black}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ borderWidth: 1 });
            },
            'return': { style: { borderWidth: 1, borderStyle: 'solid', borderColor: 'black' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{marginHorizontal: 10} = {marginLeft: 10, marginRight: 10}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ marginHorizontal: 10 });
            },
            'return': { style: { marginLeft: 10, marginRight: 10 } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{marginVertical: 10} = {marginTop: 10, marginBottom: 10}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ marginVertical: 10 });
            },
            'return': { style: { marginTop: 10, marginBottom: 10 } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{resizeMode: cover} = {objectFit: cover}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ resizeMode: 'cover' });
            },
            'return': { style: { objectFit: 'cover' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{resizeMode: contain} = {objectFit: contain}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ resizeMode: 'contain' });
            },
            'return': { style: { objectFit: 'contain' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{resizeMode: stretch} = {objectFit: fill}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ resizeMode: 'stretch' });
            },
            'return': { style: { objectFit: 'fill' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{transform: [{rotate: \'20deg\'}, {translateX: 120}]} = {transform: \'rotate(20eg) translateX(120px)\'}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ transform: [{ rotate: '20deg' }, { translateX: 120 }] });
            },
            'return': { style: { transform: 'rotate(20deg) translateX(120px)' } }
          })
        ),
        _react2.default.createElement(
          _describeReact.Describe,
          { label: '{flexDirection: \'row\' | \'column\'} = {display: \'flex\', flexDirection: \'row\' | \'column\'}' },
          _react2.default.createElement(_describeReact.Expect, {
            'function': function _function() {
              return style({ flexDirection: 'row' });
            },
            'return': { style: { flexDirection: 'row', display: 'flex' } }
          })
        )
      )
    )
  );
};