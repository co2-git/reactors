import React, {Component} from 'react';
import {Text} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsText extends Component {
  render() {
    switch (Reactors.platform) {
    case 'mobile':
      return <Text {...this.props}>{this.props.children}</Text>;
    case 'web':
      return <span {...this.props}>{this.props.children}</span>;
    }
  }
}
