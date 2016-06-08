/**
  * @flow
**/

import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Reactors from 'reactors';

type PROPS = {
  accessibilityLabel?: string,
};

export default class ReactorsView extends Component {
  static propTypes = {
    accessibilitylabel: PropTypes.string,
  };

  render() {
    const props = {...this.props};

    switch (Reactors.platform) {
    case 'mobile':
      return (
        <View {...props}>
          {this.props.children}
        </View>
      );
    case 'web':
      return (
        <section {...props}>
          {this.props.children}
        </section>
      );
    }
  }
}
