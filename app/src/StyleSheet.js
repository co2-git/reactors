import {StyleSheet} from 'react-native';
import Reactor from 'reactor';

export default class ReactorStyleSheet {
  static create(style) {
    switch (Reactor.platform) {
    case 'mobile':
      return StyleSheet.create(style);
    default:
      return style;
    }
  }
}
