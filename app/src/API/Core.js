/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

/* globals window */

import {StyleRule} from './StyleSheet';

function guessPlatform() {
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
    const _props = {...incomingProps};
    if (_props.style) {
      _props.style = new StyleRule(_props.style);
    }
    if (_props.onPress) {
      if (this.platform === 'mobile') {
        _props.onStartShouldSetResponder = _props.onPress;
      } else {
        _props.onClick = _props.onPress;
        delete _props.onPress;
      }
    }
    return _props;
  }
}

export default new Core();
