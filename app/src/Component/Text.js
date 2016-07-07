/**
  * @module reactors
  * @name Text
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {Text} from 'react-native';
import Reactors, {StyleRule} from 'reactors';

export default class ReactorsText extends Component {
  render() {
    const props = {...this.props};
    if (props.style) {
      props.style = new StyleRule(props.style);
    }
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return <Text {...props}>{this.props.children}</Text>;
    case 'web':
    case 'desktop': {
      if (props.onPress) {
        props.onClick = props.onPress;
      }
      return <div {...props}>{this.props.children}</div>;
    }
    }
  }
}
