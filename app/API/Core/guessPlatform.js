// @flow
/* globals process window */

export default function guessPlatform(): $ReactorsPlatform {
  if (typeof window !== 'undefined' && window.DOMError) {
    if (window.process) {
      return 'desktop';
    }
    return 'web';
  }
  if (typeof process === 'object') {
    if (process.env.USER) {
      return 'node';
    }
  }
  return 'mobile';
}
