/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const mobileProps = Reactors.props(this.props);
    const props = {
      ref: '__internalView',
      ...mobileProps,
    };
    if (props.scroll) {
      return (
        <ScrollView ref="__internalView" {...mobileProps}>
          {this.props.children}
        </ScrollView>
      );
    }
    return (
      /* $FlowFixMe This is by design */
      <View ref="__internalView" {...mobileProps}>
        {this.props.children}
      </View>
    );
  }
}
