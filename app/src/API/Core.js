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

export
class Core {
  platform = guessPlatform();
}

export default new Core();
