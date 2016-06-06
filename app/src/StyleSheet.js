import {StyleSheet} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsStyleSheet {
  static create(style) {
    switch (Reactors.platform) {
    case 'mobile':
      return StyleSheet.create(style);
    default:
      return style;
    }
  }
}
