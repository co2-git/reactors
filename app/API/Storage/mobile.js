import {AsyncStorage} from 'react-native';

export default class ReactorsStorageMobile {
  static getItem(itemTitle) {
    return AsyncStorage.getItem(itemTitle);
  }
  static setItem(itemTitle, item) {
    return AsyncStorage.setItem(itemTitle, item);
  }
}
