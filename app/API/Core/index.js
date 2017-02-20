/**
  * @module reactors
  * @flow
**/

import includes from 'lodash/includes';
import guessPlatform from './guessPlatform';
import props from './props';

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

  mergeStyles(...styles: any[]) {
    if (this.isMobile()) {
      const merged = [];

      for (const style of styles) {
        if (Array.isArray(style)) {
          merged.push(...style);
        } else if (style && typeof style === 'object') {
          // List style (from StyleSheet.create)
          if (style[0]) {
            merged.push(...Array.from(style));
          } else {
            merged.push(style);
          }
        }
      }

      return merged;
    }

    let merged = {};

    for (const style of styles) {
      if (Array.isArray(style)) {
        for (const item of style) {
          merged = {...merged, item};
        }
      } else if (style && typeof style === 'object') {
        // List style (from StyleSheet.create)
        if (style[0]) {
          const arr = Array.from(style);

          for (const item of arr) {
            merged = {...merged, item};
          }
        } else {
          merged = {...merged, ...style};
        }
      }
    }

    return merged;
  }

  props = props.bind(this);

}

export default new Core();
