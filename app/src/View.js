import React, {Component} from 'react';
import {View} from 'react-native';
import Reactor from 'reactor';

export default class ReactorView extends Component {
  render() {
    switch (Reactor.platform) {
    case 'mobile':
      return <View {...this.props}>{this.props.children}</View>;
    case 'web':
      return <section {...this.props}>{this.props.children}</section>;
    }
  }
}
