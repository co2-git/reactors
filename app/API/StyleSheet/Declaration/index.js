// @flow
import clone from 'lodash/clone';
import isFunction from 'lodash/isFunction';
import * as properties from '../Properties';
import Reactors from '../../Core';

export default class Declaration {
  platform: $ReactorsPlatform;
  property: string;
  value: any;
  style: $ReactorsStyleSheetProperty;

  constructor(
    property: string,
    value: any,
    platform: $ReactorsPlatform = Reactors.platform,
  ) {
    this.platform = platform;
    this.property = property;
    this.value = value;
    this.style = properties[this.property];
  }

  toObject(styles: Declaration[] = []) {
    if (!this.style) {
      return {[this.property]: this.value};
    }
    return this.format(styles);
  }

  format(styles: Declaration[] = []): any {
    let value = clone(this.value);

    if (this.style) {
      if (isFunction(this.style[this.platform])) {
        return this.style[this.platform](value, styles);
      }
    }

    return {[this.property]: this.value};
  }
}
