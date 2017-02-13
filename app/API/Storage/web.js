/* globals localStorage */

export default class ReactorsStorageDOM {
  static getItem(itemTitle) {
    return localStorage.getItem(itemTitle);
  }
  static setItem(itemTitle, item) {
    return localStorage.setItem(itemTitle, item);
  }
}
