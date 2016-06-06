import React, {Component} from 'react';
import {View} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsView extends Component {
  render() {
    switch (Reactors.platform) {
    case 'mobile':
      return <View {...this.props}>{this.props.children}</View>;
    case 'web':
      return <section {...this.props}>{this.props.children}</section>;
    }
  }
}
