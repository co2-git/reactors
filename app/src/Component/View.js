/**
  * @module reactors
  * @name View
  * @type Component
  * @flow
**/

import React, {Component, PropTypes} from 'react';
import {View} from 'react-native';
import Reactors from 'reactors';

type PROPS = {
  accessibilityLabel?: string,
};

export default class ReactorsView extends Component {
  static propTypes = {
    accessibilitylabel: PropTypes.string,
  };

  style = {};

  renderChildren() {
    const children = Array.isArray(this.props.children) ? this.props.children :
      [this.props.children];

    return children
      .filter(child => child)
      .map((child, index) => {
        const props = {};

        if (child.key === null) {
          props.key = index;
        }

        if (child.type && child.type.name === 'ReactorsScrollView') {
          this.style.overflow = 'auto';
        }

        return React.cloneElement(child, props);
      });
  }

  render() {
    const props: PROPS = {...this.props};

    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return (
        <View {...props}>
          {this.props.children}
        </View>
      );
    case 'web':
    case 'desktop':
      return this._renderWeb();
    }
  }

  _renderWeb() {
    const props: PROPS = {...this.props};
    const children = this.renderChildren();
    let style = {};
    if (this.props.style) {
      style = this.props.style;
    }
    return (
      <section {...props} style={{...style, ...this.style}}>
        {children}
      </section>
    );
  }
}
