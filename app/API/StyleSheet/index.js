import Declarations from './Declarations';
import isArray from 'lodash/isArray';

export default class StyleSheet {
  static create(styles: $ReactorsStyleSheet) {
    return new this(styles);
  }

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

const styles = new StyleSheet({foo: {
  transform: [{rotate: '90deg'}]
}});

const rule = new Declarations(styles.foo).toObject();
