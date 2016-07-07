/**
  * @module reactors
  * @name Link
  * @type Component
  * @flow
**/

import React, {Component, PropTypes} from 'react';
import {TouchableHighlight, Linking, View} from 'react-native';
import Reactors, {StyleRule} from 'reactors';

export default class ReactorsLink extends Component {
  static propTypes = {
    href: PropTypes.string,
  };

  go = () => {
    Linking.openURL(this.props.href);
  };

  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return this._renderMobile();
    case 'web':
    case 'desktop':
      return this._renderWeb();
    }
  }

  _renderMobile() {
    return (
      <TouchableHighlight
        onPress={this.go}
        style={new StyleRule(this.props.style)}
        underlayColor="rgba(255, 255, 255, 0)"
        >
        <View>
          {this.props.children}
        </View>
      </TouchableHighlight>
    );
  }

  _renderWeb() {
    const props = {...this.props};
    if (props.onPress) {
      props.onClick = props.onPress;
    }
    if (props.style) {
      props.style = new StyleRule(props.style);
    }
    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }
}
