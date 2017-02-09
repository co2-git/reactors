/**
  * @module reactors
  * @flow
**/

import Reactors from 'reactors';

export default class ReactorsStorage {
  static getItem(itemTitle: string) {
    switch (Reactors.platform) {

    default:
      throw new Error('Unknown platform: ' + Reactors.platform);

    case 'mobile': {
      const ReactorsStorageMobile = require('./mobile').default;
      return ReactorsStorageMobile.getItem(itemTitle);
    }

    }
  }

  static setItem(itemTitle: string, item: string) {
    switch (Reactors.platform) {

    default:
      throw new Error('Unknown platform: ' + Reactors.platform);

    case 'mobile': {
      const ReactorsStorageMobile = require('./mobile').default;
      return ReactorsStorageMobile.setItem(itemTitle, item);
    }

    }
  }
}
