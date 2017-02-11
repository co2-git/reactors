/**
  * @module reactors
  * @flow
**/

/* globals CustomEvent requestAnimationFrame window */
import Reactors from '../Core';

export default class Dimensions {
  static __onResize = [];

  static resize() {
    const throttle = (type, name, obj = window) => {
      let running = false;
      const listener = () => {
        if (!running) {
          running = true;
          requestAnimationFrame(() => {
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
          });
        }
      };
      obj.addEventListener(type, listener);
    };

    throttle('resize', 'optimizedResize');

    window.addEventListener('optimizedResize', () => {
      for (const onResizeListener of this.__onResize) {
        onResizeListener(window.innerWidth, window.innerHeight);
      }
    });
  }

  static get() {
    if (Reactors.platform === 'mobile') {
      const ReactNative = require('react-native');
      const RN = ReactNative.default || ReactNative;
      const {Dimensions: RNDimensions} = RN;
      return RNDimensions.get('window');
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  static onResize(cb) {
    this.__onResize.push(cb);
  }
}

if (Reactors.platform !== 'mobile') {
  Dimensions.resize();
}
