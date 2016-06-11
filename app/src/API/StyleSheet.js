/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import {StyleSheet} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsStyleSheet {
  static create(style) {
    switch (Reactors.platform) {
    case 'mobile':
      return StyleSheet.create(style);
    default:
      for (const rule in style) {
        if (style[rule].borderWidth && !style[rule].borderStyle) {
          style[rule].borderStyle = 'solid';
        }
      }
      return style;
    }
  }
}
