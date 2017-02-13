/**
  * @module reactors
  * @flow
**/

/* globals window */

import Declarations from '../StyleSheet/Declarations';
import includes from 'lodash/includes';

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

  getOS() {
    if (this.platform === 'mobile') {
      const RN = require('react-native');
      return RN.Platform;
    }
    return {OS: this.platform};
  }

  isDOM() {
    return includes(['desktop', 'web'], this.platform);
  }

  isMobile() {
    return this.platform === 'mobile';
  }

  isDesktop() {
    return this.platform === 'desktop';
  }

  isWeb() {
    return this.platform === 'web';
  }

  isAndroid() {
    if (!this.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'android';
  }

  isiOS() {
    if (!this.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'ios';
  }

  props(incomingProps: $reactors$Core$props) {
    const reactorsProps = {...incomingProps};

    // accessibility
    if (reactorsProps.accessibilityLabel && this.platform !== 'mobile') {
      reactorsProps['aria-labelledby'] = reactorsProps.accessibilityLabel;
      delete reactorsProps.accessibilityLabel;
    }

    if (reactorsProps.accessibilityTraits && this.platform !== 'mobile') {
      reactorsProps.role = reactorsProps.accessibilityTraits;
      delete reactorsProps.accessibilityTraits;
    }

    if (reactorsProps.accessible && this.platform !== 'mobile') {
      delete reactorsProps.accessible;
    }

    // style
    if (reactorsProps.style) {
      reactorsProps.style = new Declarations(reactorsProps.style)
        .toObject();
    }

    // gesture
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
