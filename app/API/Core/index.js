
/**
  * @module reactors
  * @flow
**/

/* globals window */

import Accessibility from '../Accessibility';
import Declarations from '../StyleSheet/Declarations';
import includes from 'lodash/includes';

function guessPlatform(): $reactors$platform {
  if (typeof window !== 'undefined' && window.DOMError) {
    if (window.process) {
      return 'desktop';
    }
    return 'web';
  }
  return 'mobile';
}

export class Core {
  platform = guessPlatform();

  compose(component: React.Element) {
    const props = {...component.props};

    if (props.style) {
      props.style = new Declarations(props.style).toObject();
    }

    const accessibilityProps = Accessibility.transform(component);

    console.log();

    console.log(require('util').inspect({accessibilityProps}, { depth: null }));
    console.log();

    const added = [
      accessibilityProps,
    ].map(prop => prop.added);

    const removed = [
      accessibilityProps,
    ].map(prop => prop.removed);

    console.log(require('util').inspect({added, removed}, { depth: null }));
    console.log();

    for (const _added of added) {
      for (const __added of _added) {
        for (const name in __added) {
          props[name] = __added[name];
        }
      }
    }

    for (const _removed of removed) {
      for (const __removed of _removed) {
        delete props[__removed];
      }
    }

    console.log(require('util').inspect({props}, { depth: null }));
  }

  getOS() {
    if (this.platform === 'mobile') {
      const RN = require('react-native');
      return RN.Platform;
    }
    return {OS: this.platform};
  }

  isDOM() {
    return includes(['desktop', 'web'], this.platform);
  }

  isMobile() {
    return this.platform === 'mobile';
  }

  isDesktop() {
    return this.platform === 'desktop';
  }

  isWeb() {
    return this.platform === 'web';
  }

  isAndroid() {
    if (!this.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'android';
  }

  isiOS() {
    if (!this.isMobile()) {
      return false;
    }
    const RN = require('react-native');
    return RN.Platform.OS === 'ios';
  }

  mergeStyles(...styles: any[]) {
    if (this.isMobile()) {
      const merged = [];

      for (const style of styles) {
        if (Array.isArray(style)) {
          merged.push(...style);
        } else if (style && typeof style === 'object') {
          // List style (from StyleSheet.create)
          if (style[0]) {
            merged.push(...Array.from(style));
          } else {
            merged.push(style);
          }
        }
      }

      return merged;
    }

    let merged = {};

    for (const style of styles) {
      if (Array.isArray(style)) {
        for (const item of style) {
          merged = {...merged, item};
        }
      } else if (style && typeof style === 'object') {
        // List style (from StyleSheet.create)
        if (style[0]) {
          const arr = Array.from(style);

          for (const item of arr) {
            merged = {...merged, item};
          }
        } else {
          merged = {...merged, ...style};
        }
      }
    }

    return merged;
  }

  props(incomingProps: $reactors$Core$props) {
    const reactorsProps = {...incomingProps};

    // accessibility
    if (reactorsProps.accessibilityLabel && this.platform !== 'mobile') {
      reactorsProps['aria-labelledby'] = reactorsProps.accessibilityLabel;
      delete reactorsProps.accessibilityLabel;
    }

    if (reactorsProps.accessibilityTraits && this.platform !== 'mobile') {
      reactorsProps.role = reactorsProps.accessibilityTraits;
      delete reactorsProps.accessibilityTraits;
    }

    if (reactorsProps.accessible && this.platform !== 'mobile') {
      delete reactorsProps.accessible;
    }

    // style
    if (reactorsProps.style) {
      reactorsProps.style = new Declarations(reactorsProps.style)
        .toObject();
    }

    // gesture
    if (reactorsProps.onPress) {
      if (this.platform === 'mobile') {
        reactorsProps.onStartShouldSetResponder = reactorsProps.onPress;
      } else {
        reactorsProps.onClick = reactorsProps.onPress;
        delete reactorsProps.onPress;
      }
    }

    return reactorsProps;
  }
}

const core = new Core();

export default core;
