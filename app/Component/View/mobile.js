/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView} from 'react-native';

export default class ReactorsViewMobile extends Component {
  props: $reactors$Core$props;

  measure(cb: Function) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    return (
      <ScrollView ref="__internalView" {...this.props}>
        {this.props.children}
      </ScrollView>
    );
  }
}
