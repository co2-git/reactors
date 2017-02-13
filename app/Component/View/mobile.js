/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = {
      ref: '__internalView',
      ...this.props,
    };
    if (props.scroll) {
      return (
        <ScrollView ref="__internalView" {...this.props}>
          {this.props.children}
        </ScrollView>
      );
    }
    return (
      /* $FlowFixMe This is by design */
      <View ref="__internalView" {...this.props}>
        {this.props.children}
      </View>
    );
  }
}
