/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import omit from 'lodash/omit';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = omit(this.props.style);

    if (props.scrollable) {
      return (
        <ScrollView
          ref="__internalView"
          {...props}
          contentContainerStyle={this.props.style}
          >
          {this.props.children}
        </ScrollView>
      );
    }

    return (
      /* $FlowFixMe - we don't have react */
      <View
        ref="__internalView"
        {...props}
        style={this.props.style}
        >
        {this.props.children}
      </View>
    );
  }
}
