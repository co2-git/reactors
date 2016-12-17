/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

// $FlowFixMe This is by design
import Reactors from 'reactors';
import _ from 'lodash';
import createStyleSheet from './createStyleSheet';
import createStyleRule from './createStyleRule';

export default class ReactorsStyleSheetAPI {
  static create(styleSheet: $reactors$styleSheet) {
    return new this(styleSheet);
  }
  constructor(styleSheet: $reactors$styleSheet) {
    Object.assign(this, createStyleSheet(styleSheet, Reactors.platform));
  }
}

class ReactorsStyleSheetAPIRule {
  constructor(
    rule: $reactors$StyleSheet$Rule | $reactors$StyleSheet$Rule[]
  ) {
    if (Array.isArray(rule)) {
      rule
        .map((_rule: $reactors$StyleSheet$Rule) =>
          createStyleRule(_rule, Reactors.platform)
        )
        .forEach((_rule: $reactors$StyleSheet$Rule) =>
          Object.assign(this, _rule)
        );
    } else {
      Object.assign(this, createStyleRule(rule, Reactors.platform));
    }
  }
}

export {ReactorsStyleSheetAPIRule as StyleRule};
