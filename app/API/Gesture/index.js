/**
  * @module reactors
  * @flow
**/

import Reactors from '../Core';
import omit from 'lodash/omit';

type $handlers = {
  added: {[name: string]: Function}[],
  removed: string[],
};

// This function takes props and return an array of new props

export default class Gesture {
  static gestures = [
    'onEnter',
    'onPress',
  ];

  static mock(Component) {
    return <Component />;
  }

  static getHandlers(
    props: {[name: string]: Function},
    Component: React.Element,
  ): $handlers {
    if (Reactors.isMobile()) {
      return this.getMobileHandlers(props, Component);
    }
    return this.getWebHandlers(props, Component);
  }

  static getMobileHandlers(
    props: {[name: string]: Function},
    Component: React.Element,
  ): $handlers {
    const handlers = {
      added: [],
      removed: [],
    };

    for (const handler in props) {
      switch (handler) {

      case 'onPress': {
        const mock = this.mock(Component);
        if (typeof mock.onPress !== 'function') {
          handlers.added.push({onStartShouldSetResponder: props.onPress});
          handlers.removed.push('onPress');
        }
      } break;

      }
    }

    return handlers;
  }

  static getWebHandlers(props: {[name: string]: Function}): $handlers {

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
