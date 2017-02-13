/**
  * @module reactors
  * @flow
**/

import Reactors from '../Core';

export default class ReactorsStorage {
  static getPlatform() {
    if (Reactors.isMobile()) {
      const ReactorsStorageMobile = require('./mobile').default;
      return ReactorsStorageMobile;
    }

    if (Reactors.isDOM()) {
      const ReactorsStorageDOM = require('./web').default;
      return ReactorsStorageDOM;
    }

    throw new Error(`Unknown platform: ${Reactors.platform}`);
  }

  static getItem(itemTitle: string) {
    const Platform = this.getPlatform();
    return Platform.getItem(itemTitle);
  }

  static setItem(itemTitle: string, item: string) {
    const Platform = this.getPlatform();
    return Platform.setItem(itemTitle, item);
  }
}
