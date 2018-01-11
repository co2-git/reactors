import borderWidth from './transforms/borderWidth';
import cursor from './transforms/cursor';
import display from './transforms/display';
import flexDirection from './transforms/flexDirection';
import marginHorizontal from './transforms/marginHorizontal';
import marginVertical from './transforms/marginVertical';
import Reactors from '../Core';
import resizeMode from './transforms/resizeMode';
import transform from './transforms/transform';
import transition from './transforms/transition';

export default class StyleSheet {
  static create(styles) {
    if (Reactors.isMobile()) {
      const RNSS = require('react-native').StyleSheet;
      return RNSS.create(styles);
    }
    return new this(styles);
  }

  static merge = (styles) => {
    const array = [];
    if (Array.isArray(styles)) {
      array.push(...styles);
    } else {
      array.push(styles);
    }
    const transformed = {};
    for (const style of array) {
      Object.assign(transformed, style);
    }
    return transformed;
  };

  static transform = (styles) => {
    const transformers = [
      borderWidth,
      cursor,
      display,
      flexDirection,
      marginHorizontal,
      marginVertical,
      resizeMode,
      transform,
      transition,
    ];
    let transformed = StyleSheet.merge(styles);
    for (const transformer of transformers) {
      transformed = transformer(transformed);
    }
    return transformed;
  };

  constructor(rules: {}) {
    for (const selector in rules) {
      this[selector] = rules[selector];
    }
  }
}
