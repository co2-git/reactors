/**
  * @module reactors
  * @flow
**/

/* globals window */

import Declarations from '../StyleSheet/Declarations';

function guessPlatform(): $reactors$platform {
  if (typeof window !== 'undefined' && window.DOMError) {
    if (window.process) {
      return 'desktop';
    }
    return 'web';
  }
  return 'mobile';
}

export class Core {
  platform = guessPlatform();

  props(incomingProps: $reactors$Core$props) {
    const reactorsProps = {...incomingProps};

    if (reactorsProps.style) {
      reactorsProps.style = new Declarations(reactorsProps.style)
        .toObject();
    }

    if (reactorsProps.onPress) {
      if (this.platform === 'mobile') {
        reactorsProps.onStartShouldSetResponder = reactorsProps.onPress;
      } else {
        reactorsProps.onClick = reactorsProps.onPress;
        delete reactorsProps.onPress;
      }
    }
    return reactorsProps;
  }
}

export default new Core();
