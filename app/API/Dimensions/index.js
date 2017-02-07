/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

/* globals window */
import Reactors from 'reactors';

export default class Dimensions {
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
}
