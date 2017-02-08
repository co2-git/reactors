/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {View} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const mobileProps = Reactors.props(this.props);
    return (
      /* $FlowFixMe This is by design */
      <View ref="__internalView" {...mobileProps}>
        {this.props.children}
      </View>
    );
  }
}
