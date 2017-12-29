/**
  * @module reactors
  * @flow
**/

import includes from 'lodash/includes';
import guessPlatform from './guessPlatform';
import props from './props';

if (typeof __DEV__ === 'undefined') {
  global.__DEV__ = process.env.NODE_ENV !== 'production';
}

export default class Reactors {
  static platform = guessPlatform();

  static getOS = () => {
    if (Reactors.platform === 'mobile') {
      const RN = require('react-native');
      return RN.Platform;
    }
    return {OS: Reactors.platform};
  };

  static isAndroid = () => {
    if (!Reactors.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'android';
  };

  static isDesktop = () => Reactors.platform === 'desktop';

  static isDOM = () => includes(['desktop', 'web'], Reactors.platform);

  static isiOS = () => {
    if (!Reactors.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'ios';
  };

  static isMobile = () => Reactors.platform === 'mobile';

  static isWeb = () => Reactors.platform === 'web';

  static props = props;
}

// mergeStyles(...styles: any[]) {
//   if (this.isMobile()) {
//     const merged = [];
//
//     for (const style of styles) {
//       if (Array.isArray(style)) {
//         merged.push(...style);
//       } else if (style && typeof style === 'object') {
//         // List style (from StyleSheet.create)
//         if (style[0]) {
//           merged.push(...Array.from(style));
//         } else {
//           merged.push(style);
//         }
//       }
//     }
//
//     return merged;
//   }
//
//   let merged = {};
//
//   for (const style of styles) {
//     if (Array.isArray(style)) {
//       for (const item of style) {
//         merged = {...merged, item};
//       }
//     } else if (style && typeof style === 'object') {
//       // List style (from StyleSheet.create)
//       if (style[0]) {
//         const arr = Array.from(style);
//
//         for (const item of arr) {
//           merged = {...merged, item};
//         }
//       } else {
//         merged = {...merged, ...style};
//       }
//     }
//   }
//
//   return merged;
// }
