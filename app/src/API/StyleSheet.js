/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import Reactors from 'reactors';
import createStyleSheet from './StyleSheet/createStyleSheet';
import createStyleRule from './StyleSheet/createStyleRule';
import type {STYLESHEET, STYLE_RULE} from '../../config/types';

export default class ReactorsStyleSheetAPI {
  static create(styleSheet: STYLESHEET) {
    return new this(styleSheet);
  }
  constructor(styleSheet: STYLESHEET) {
    Object.assign(this, createStyleSheet(styleSheet, Reactors.platform));
  }
}

class ReactorsStyleSheetAPIRule {
  constructor(rule: STYLE_RULE) {
    Object.assign(this, createStyleRule(rule, Reactors.platform));
  }
}

export {ReactorsStyleSheetAPIRule as Rule};
