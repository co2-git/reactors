/**
  * @module reactors
  * @name Text
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {Text} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsText extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return <Text {...this.props}>{this.props.children}</Text>;
    case 'web':
    case 'desktop': {
      const props = {...this.props};
      if (props.onPress) {
        props.onClick = props.onPress;
      }
      return <div {...props}>{this.props.children}</div>;
    }
    }
  }
}
