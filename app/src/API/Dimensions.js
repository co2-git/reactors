/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

/* globals window */

// $FlowFixMe This is by design
import Reactors from 'reactors';

export default class Dimensions {
  static get() {
    if (Reactors.platform === 'mobile') {
      // $FlowFixMe This is by design
      const ReactNative = require('react-native');
      const {Dimensions: RNDimensions} = ReactNative.default;
      return RNDimensions.get('window');
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
}
