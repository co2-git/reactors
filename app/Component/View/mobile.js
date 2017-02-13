/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import omit from 'lodash/omit';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = omit(this.props.style);

    return (
      /* $FlowFixMe - we don't have react */
      <ScrollView
        ref="__internalView"
        {...props}
        contentContainerStyle={this.props.style}
        >
        {this.props.children}
      </ScrollView>
    );
  }
}
