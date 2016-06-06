import React, {Component} from 'react';
import {Text} from 'react-native';
import Reactor from 'reactor';

export default class ReactorText extends Component {
  render() {
    switch (Reactor.platform) {
    case 'mobile':
      return <Text {...this.props}>{this.props.children}</Text>;
    case 'web':
      return <span {...this.props}>{this.props.children}</span>;
    }
  }
}
