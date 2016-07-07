'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* globals window */

function guessPlatform() {
  if (typeof window !== 'undefined' && window.DOMError) {
    if (window.process) {
      return 'desktop';
    }
    return 'web';
  }
  return 'mobile';
}

var Core = function Core() {
  _classCallCheck(this, Core);

  this.platform = guessPlatform();
};

exports.default = new Core();