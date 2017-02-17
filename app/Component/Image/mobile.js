/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {Image} from 'react-native';

export default class ReactorsImageMobile extends Component {
  props: $ReactorsImageProps;

  render() {
    return <Image {...this.props} />;
  }
}
