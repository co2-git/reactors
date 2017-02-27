// @flow
/* globals process window */

export default function guessPlatform(): $ReactorsPlatform {
  if (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    window.document.body
  ) {
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
