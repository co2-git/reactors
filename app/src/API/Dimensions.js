// @flow
/* globals window */

import Reactors from 'reactors';

export default class Dimensions {
  static get() {
    if (Reactors.platform === 'mobile') {
      const {Dimensions: RNDimensions} = require('react-native').default;
      return RNDimensions.get('window');
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
}
