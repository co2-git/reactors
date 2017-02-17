/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import omit from 'lodash/omit';

export default class ReactorsViewMobile extends Component {

  measure(cb: $ReactorsViewMeasureCallback) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    if (this.props.scrollable) {
      return (
        <ScrollView
          ref="__internalView"
          {...this.props}
          contentContainerStyle={this.props.style}
          >
          {this.props.children || false}
        </ScrollView>
      );
    }

    return (
      <View
        ref="__internalView"
        {...this.props}
        >
        {this.props.children}
      </View>
    );
  }

}
