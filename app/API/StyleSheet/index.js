import Reactors from '../Core';

export default class StyleSheet {
  static create(styles) {
    if (Reactors.isMobile()) {
      const RNSS = require('react-native').StyleSheet;
      return RNSS.create(styles);
    }
    return new this(styles);
  }

  constructor(rules: {}) {
    for (const selector in rules) {
      this[selector] = rules[selector];
    }
  }
}
