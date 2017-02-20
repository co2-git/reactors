// @flow
import Reactors from '../Core';

export default class ReactorsAccessibility {

  static transform(props: {[prop: string]: any}): $ReactorsPropsTransformers {
    switch (Reactors.platform) {

    default: {
      return {
        added: [],
        removed: [],
      };
    }

    case 'mobile': {
      return this.transformMobile(props);
    }

    case 'desktop':
    case 'web':
    case 'node': {
      return this.transformWeb(props);
    }

    }
  }

  static transformMobile(
    props: {[prop: string]: any},
  ): $ReactorsPropsTransformers {
    const transformers = {
      added: [],
      removed: [],
    };

    for (const prop in props) {
      switch (prop) {

      case 'aria-labelledby': {
        transformers.added.push({accessibilityLabel: props[prop]});
        transformers.removed.push('aria-labelledby');
      } break;

      }
    }

    return transformers;
  }

  static transformWeb(
    props: {[prop: string]: any},
  ): $ReactorsPropsTransformers {
    const transformers = {
      added: [],
      removed: [],
    };

    for (const prop in props) {
      switch (prop) {

      case 'accessibilityLabel': {
        transformers.added.push({['aria-labelledby']: props[prop]});
        transformers.removed.push('accessibilityLabel');
      } break;

      }
    }

    return transformers;
  }

}
