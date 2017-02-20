/**
  * @module reactors
  * @flow
**/

import Reactors from '../Core';
import omit from 'lodash/omit';

// This function takes props and return an array of new props

export default class Gesture {
  static transform(
    props: {[name: string]: Function}
  ): $ReactorsPropsTransformers {
    const handlers = {
      added: [],
      removed: [],
    };

    // const click = [];
    // const keyPress = [];

    // console.log({props});

    for (const handler in props) {
      // console.log({handler});
      switch (handler) {

      case 'onPress': {
        // console.log('ONPRESS');
        if (Reactors.platform === 'mobile') {
          handlers.added.push({onStartShouldSetResponder: props.onPress});
        } else {
          handlers.added.push({onClick: props.onPress});
        }
        handlers.removed.push('onPress');
      } break;

      case 'onEnter': {
        if (Reactors.platform === 'mobile') {
          handlers.added.push({onStartShouldSetResponder: props.onPress});
        } else {
          handlers.added.push({onClick: props.onPress});
        }
        handlers.removed.push('onPress');
      } break;

      }
    }

    return handlers;
  }

  static handlers(props: Object): $reactors$Gesture$handlers & Object {
    const clone_props = {...props};
    switch (Reactors.platform) {
    case 'mobile':
      return clone_props;
    default: {
      return this.webHandlers(props);
    }
    }
  }

  static webHandlers(props: Object): $reactors$Gesture$handlers & Object {
    const handlers = {};
    const click = [];
    const keyPress = [];
    if (props.onPress) {
      click.push(props.onPress);
    }
    if (props.onEnter) {
      keyPress.push((event) => {
        if (event.charCode === 13) {
          props.onEnter(event);
        }
      });
    }
    if (click.length) {
      handlers.onClick = (event) => {
        click.forEach(fn => fn(event));
      };
    }
    if (keyPress.length) {
      handlers.onKeyPress = (event) => {
        keyPress.forEach(fn => fn(event));
      };
    }
    return {
      ...omit(props, this.gestures),
      ...handlers,
    };
  }
}
