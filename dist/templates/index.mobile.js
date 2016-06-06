'use strict';

var _reactNative = require('react-native');

var _App = require('./app/App');

var _App2 = _interopRequireDefault(_App);

var _reactor = require('reactor');

var _reactor2 = _interopRequireDefault(_reactor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactor2.default.platform = 'mobile'; /**
                                         * @module {app}
                                         * @name Index for mobile platforms (iOS & Android)
                                         * @type RN Index
                                         * @description React Native index
                                         * 
                                       **/

_reactNative.AppRegistry.registerComponent({ app: app }, function () {
  return _App2.default;
});