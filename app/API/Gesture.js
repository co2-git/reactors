/**
  * @module reactors
  * @name Gesture
  * @type Class
  * @flow
**/

// $FlowFixMe This is by design
import Reactors from 'reactors';
import _ from 'lodash';

export default class Gesture {
  static gestures = [
    'onEnter',
    'onPress',
  ];
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
      ..._.omit(props, this.gestures),
      ...handlers,
    };
  }
}
