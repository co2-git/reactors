/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsScrollView extends Component {
  render() {
    switch (Reactors.platform) {
    case 'mobile':
      return <ScrollView {...this.props}>{this.props.children}</ScrollView>;
    case 'web':
      const style = {
        overflow: 'auto',
      };
      return (
        <section style={style} {...this.props}>
          {this.props.children}
        </section>
      );
    }
  }
}
