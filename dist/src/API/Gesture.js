'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      switch (_reactors2.default.platform) {
        case 'mobile':
          return props;
        default:
          if (props.onPress) {
            props.onClick = props.onPress;
          }
          return props;
      }
    }
  }]);

  return Gesture;
}();

exports.default = Gesture;