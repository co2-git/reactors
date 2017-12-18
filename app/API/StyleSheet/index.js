import Declarations from './Declarations';
import isArray from 'lodash/isArray';
import Style from './Style';
import Core from '../Core';

export default class StyleSheet {
  static create(styles: $ReactorsStyleSheet) {
    return new this(styles);
  }

  static merge(...styles: any[]) {
    return Core.mergeStyles(styles);
  }

  static Style = Style;

  constructor(rules: {}) {
    for (const selector in rules) {
      const _declarations = rules[selector];
      const declarations = isArray(_declarations) ?
        _declarations : [_declarations];

      Object.assign(this, {
        [selector]: new Declarations(declarations).toObject(),
      });
    }
  }
}
