'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                    * @module reactors
                                                                                                                                                                                                                                                                    * @name StyleSheet
                                                                                                                                                                                                                                                                    * @type Class
                                                                                                                                                                                                                                                                    * 
                                                                                                                                                                                                                                                                  **/

var _reactors = require('reactors');

var _reactors2 = _interopRequireDefault(_reactors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function stringifyTransformers(transformers) {
  return transformers.map(function (transformer) {
    var key = Object.keys(transformer);
    return key + '(' + transformer[key] + ')';
  }).join(' ');
}

function parseMobile(style) {
  var mobileStyle = _extends({}, style);
  for (var rule in mobileStyle) {
    if (mobileStyle[rule]) {
      delete mobileStyle[rule].transition;
    }
  }
}

function parseWeb(style) {
  var webStyle = _extends({}, style);
  for (var rule in webStyle) {
    if (webStyle[rule]) {
      var _rule = webStyle[rule];
      if (_rule.borderWidth && !_rule.borderStyle) {
        _rule.borderStyle = 'solid';
      }
      if (_rule.flexDirection) {
        _rule.display = 'flex';
      }
      if (_rule.transform) {
        _rule.transform = stringifyTransformers(_rule.transform);
      }
    }
  }
  return webStyle;
}

var ReactorsStyleSheet = function () {
  _createClass(ReactorsStyleSheet, null, [{
    key: 'create',
    value: function create(style) {
      return new this(style);
    }
  }]);

  function ReactorsStyleSheet(styleSheet) {
    var _this = this;

    _classCallCheck(this, ReactorsStyleSheet);

    this.style = {};

    if (!_reactors2.default.getPlatform()) {
      setTimeout(function () {
        return _this.parse(styleSheet);
      });
    } else {
      this.parse(styleSheet);
    }
  }

  _createClass(ReactorsStyleSheet, [{
    key: 'parse',
    value: function parse(styleSheet) {
      switch (_reactors2.default.platform) {
        default:
          throw new Error('Reactors platform not defined');
        case 'mobile':
          for (var _selector in styleSheet) {
            if (styleSheet[_selector]) {
              styleSheet[_selector] = parseMobile(styleSheet[_selector]);
            }
          }
          break;
        case 'desktop':
        case 'web':
          for (var _selector2 in styleSheet) {
            if (styleSheet[_selector2]) {
              styleSheet[_selector2] = parseWeb(styleSheet[_selector2]);
            }
          }
      }
    }
  }]);

  return ReactorsStyleSheet;
}();

exports.default = ReactorsStyleSheet;

var Rule = exports.Rule = function () {
  function Rule(style) {
    var _this2 = this;

    _classCallCheck(this, Rule);

    if (!_reactors2.default.getPlatform()) {
      setTimeout(function () {
        return _this2.parse(style);
      });
    } else {
      this.parse(style);
    }
  }

  _createClass(Rule, [{
    key: 'parse',
    value: function parse(style) {
      switch (_reactors2.default.platform) {
        default:
          throw new Error('Reactors platform not defined');
        case 'mobile':
          this.style = parseMobile(style);
          break;
        case 'desktop':
        case 'web':
          this.style = parseWeb(style);
      }
    }
  }]);

  return Rule;
}();