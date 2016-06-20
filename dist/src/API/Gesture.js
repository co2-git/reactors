'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @module reactors
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @name Gesture
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * @type Class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     **/

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gesture = function () {
  function Gesture() {
    _classCallCheck(this, Gesture);
  }

  _createClass(Gesture, null, [{
    key: 'handlers',
    value: function handlers(props) {
      var clone_props = _extends({}, props);
      switch (_reactors2.default.platform) {
        case 'mobile':
          return clone_props;
        default:
          if (clone_props.onPress) {
            clone_props.onClick = clone_props.onPress;
          }
          return clone_props;
      }
    }
  }]);

  return Gesture;
}();

exports.default = Gesture;