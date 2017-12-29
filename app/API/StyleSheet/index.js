import Reactors from '../Core';
import transform from './transform';

export default class StyleSheet {
  static create(styles) {
    if (Reactors.isMobile()) {
      const RNSS = require('react-native').StyleSheet;
      return RNSS.create(styles);
    }
    return new this(styles);
  }

  static transform = transform;

  constructor(rules: {}) {
    for (const selector in rules) {
      this[selector] = rules[selector];
    }
  }
}
