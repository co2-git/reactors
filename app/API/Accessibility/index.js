// @flow
import Reactors from '../Core';

type $transformers = {
  added: {[prop: string]: any},
  removed: string[],
};

export default class ReactorsAccessibility {
  static warn(deprecated: string, use: string) {
    console.warn(
      `Reactors/Accessibility: deprecated warning!
      "${deprecated}" is deprecated, instead use "${use}"`,
    );
  }

  static transform(component: $React$Element): $transformers {
    if (Reactors.isMobile()) {
      return this.transformMobile(component);
    }
  }

  static transformMobile(component: $React$Element): $transformers {
    const transformers = {
      added: [],
      removed: [],
    };

    for (const prop in component.props) {
      switch (prop) {

      case 'aria-labelledby': {
        this.warn('aria-labelledby', 'accessibilityLabel');
        transformers.added.push({accessibilityLabel: component.props[prop]});
        transformers.removed.push('aria-labelledby');
      } break;

      }
    }

    return transformers;
  }
}
