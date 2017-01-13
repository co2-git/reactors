import clone from 'lodash/clone';
import includes from 'lodash/includes';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import properties from '../properties';
import Reactors from '../../Core';

export default class Declaration {
  platform: string;
  property: string;
  value: any;
  style: {value: Function | any[], web?: Function};

  constructor(
    property: string,
    value: any,
    platform = Reactors.platform,
  ) {
    this.platform = platform;
    this.property = property;
    this.value = value;
    this.style = properties[this.property];
  }

  toObject(styles = {}) {
    if (!this.style) {
      // if (this.platform === 'mobile') {
      //   return {};
      // }
      return {[this.property]: this.value};
    }
    return this.format(styles);
  }

  format(styles = {}): any {
    let value = clone(this.value);

    if (this.style) {
      if (this.style.value === Number) {
        value = parseInt(value);
      }

      if (isFunction(this.style[this.platform])) {
        return this.style[this.platform](value, styles);
      }

      if (isArray(this.style[this.platform])) {
        if (!includes(this.style[this.platform], this.value)) {
          return {};
        }
      }
    }

    return {[this.property]: this.value};
  }
}
