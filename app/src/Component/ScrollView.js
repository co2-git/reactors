/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Reactors, {StyleRule} from 'reactors';

export default class ReactorsScrollView extends Component {
  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return this._renderMobile();
    case 'web':
    case 'desktop':
      return this._renderWeb();
    }
  }

  _renderMobile() {
    const props = {...this.props};
    if (props.style) {
      props.style = new StyleRule(props.style);
    }
    return <ScrollView {...props}>{this.props.children}</ScrollView>;
  }

  _renderWeb() {
    const style = {
      overflow: 'auto',
    };
    const props = {...this.props};
    if (props.onPress) {
      props.onClick = props.onPress;
    }
    if (props.style) {
      props.style = new StyleRule(props.style);
    }
    return (
      <section
        style={style}
        {...props}
        className={'reactors$ScrollView'}
        >
        {this.props.children}
      </section>
    );
  }
}
