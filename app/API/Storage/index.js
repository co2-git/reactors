/* globals localStorage */

import Reactors from '../Core';

let Storage;

if (Reactors.isMobile()) {
  Storage = require('react-native').AsyncStorage;
} else {
  Storage = localStorage;
}

export default Storage;
