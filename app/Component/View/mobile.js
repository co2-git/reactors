/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';

export default class ReactorsViewMobile extends Component {

  measure(cb: $ReactorsViewMeasureCallback) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = {...this.props};

    if (props.onPress) {
      props.onStartShouldSetResponder = props.onPress;
      delete props.onPress;
    }

    if (this.props.scrollable) {
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
      <View
        ref="__internalView"
        {...props}
        >
        {this.props.children}
      </View>
    );
  }

}
