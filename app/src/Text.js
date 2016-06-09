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
    case 'mobile':
      return <Text {...this.props}>{this.props.children}</Text>;
    case 'web':
      return <div {...this.props}>{this.props.children}</div>;
    }
  }
}
