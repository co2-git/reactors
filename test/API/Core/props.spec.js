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

var testStylesMobile = [{
  name: 'Border shorthand',
  in: { border: '1px solid #000' },
  out: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000'
  }
}, {
  name: 'Box Shadow',
  in: { boxShadow: '0 4px 4px 1px rgba(0, 0, 0, .2)' },
  out: {
    shadowColor: 'rgba(0, 0, 0, .2)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.2,
    shadowRadius: 4
  }
}, {
  name: 'Box Shadow',
  in: { boxShadow: '60px -16px teal' },
  out: {
    shadowColor: 'teal',
    shadowOffset: {
      width: 60,
      height: -16
    },
    shadowOpacity: 1
  }
}, {
  name: 'Box Shadow',
  in: { boxShadow: '10px 5px 5px black' },
  out: {
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 5
  }
}, {
  name: 'Box Shadow',
  in: { boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)' },
  out: {
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2
  }
}, {
  name: 'Box Shadow(s)',
  in: { boxShadow: '3px 3px red, -1em 0 0.4em olive' },
  out: {
    shadowColor: 'red',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 1
  }
}, {
  name: 'Box Shadow inset',
  in: { boxShadow: 'inset 5em 1em gold' },
  out: {
    shadowColor: 'gold',
    shadowOffset: {
      width: -5,
      height: -1
    },
    shadowOpacity: 1
  }
}, {
  name: 'Cursor',
  in: { cursor: 'pointer' },
  out: {}
}, {
  name: 'Flex display with no direction',
  in: { display: 'flex' },
  out: { flexDirection: 'row' }
}, {
  name: 'Flex display with column',
  in: { display: 'flex', flexDirection: 'column' },
  out: { flexDirection: 'column' }
}, {
  name: 'Flex display with row',
  in: { display: 'flex', flexDirection: 'row' },
  out: { flexDirection: 'row' }
}, {
  name: 'Transform matrix',
  in: { transform: 'matrix(1, 2, 3)' },
  out: { transform: [] }
}, {
  name: 'Transform translate',
  in: { transform: 'translate(120px, 50%)' },
  out: { transform: [{ translateX: 120 }, { translateY: '50%' }] }
}, {
  name: 'Transform translate X',
  in: { transform: 'translateX(120px)' },
  out: { transform: [{ translateX: 120 }] }
}, {
  name: 'Transform translate Y',
  in: { transform: 'translateY(120px)' },
  out: { transform: [{ translateY: 120 }] }
}, {
  name: 'Remove transition',
  in: { transition: 'margin 1s' },
  out: {}
}];

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
        testStylesMobile.map(function (test) {
          return _react2.default.createElement(
            _describeReact.Describe,
            {
              label: test.name + ' --- ' + (JSON.stringify(test.in) + ' ==> ' + JSON.stringify(test.out))
            },
            _react2.default.createElement(_describeReact.Expect, {
              'function': function _function() {
                return style(test.in);
              },
              'return': { style: test.out }
            })
          );
        }),
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