// @flow
import Reactors from '../Core';

type $transformers = {
  added: {[prop: string]: any}[],
  removed: string[],
};

export default class ReactorsAccessibility {
  static warn(deprecated: string, use: string) {
    console.warn(
      `Reactors/Accessibility: deprecated warning!
      "${deprecated}" is deprecated, instead use "${use}"`,
    );
  }

  static transform(
    props: {[prop: string]: any},
    platform: $ReactorsPlatform = Reactors.platform
  ): $transformers {
    switch (platform) {

    default: {
      return {
        added: [],
        removed: [],
      };
    }

    case 'mobile': {
      return this.transformMobile(props);
    }

    }
  }

  static transformMobile(props: {[prop: string]: any}): $transformers {
    const transformers = {
      added: [],
      removed: [],
    };

    for (const prop in props) {
      switch (prop) {

      case 'aria-labelledby': {
        this.warn('aria-labelledby', 'accessibilityLabel');
        transformers.added.push({accessibilityLabel: props[prop]});
        transformers.removed.push('aria-labelledby');
      } break;

      }
    }

    return transformers;
  }
}
