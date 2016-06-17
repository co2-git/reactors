/**
  * @module reactors
  * @name Gesture
  * @type Class
  * @flow
**/

import Reactors from 'reactors';

export default class Gesture {
  static handlers(props: Object) {
    switch (Reactors.platform) {
    case 'mobile':
      return props;
    default:
      if (props.onPress) {
        props.onClick = props.onPress;
      }
      return props;
    }
  }
}
