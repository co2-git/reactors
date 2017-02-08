/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from 'reactors';

export default class ReactorsView extends Component {
  props: $reactors$Core$props;

  measure(cb: (
    x: number,
    y: number,
    width: number,
    height: number,
    pageX: number,
    pageY: number,
  ) => void) {
    switch (Reactors.platform) {

    default:
      throw new Error('Unknown platform: ' + Reactors.platform);

    case 'mobile': {
      console.log(this.refs);
      return this.refs.__internalView.measure(cb);
    }

    case 'web':
    case 'desktop': {
      const ViewWeb = require('./web').default;
      return (
        <ViewWeb ref="__internalView" {...this.props} />
      );
    }

    }
  }

  render() {
    switch (Reactors.platform) {

    default:
      throw new Error('Unknown platform: ' + Reactors.platform);

    case 'mobile': {
      const ViewMobile = require('./mobile').default;
      return (
        <ViewMobile ref="__internalView" {...this.props} />
      );
    }

    case 'web':
    case 'desktop': {
      const ViewWeb = require('./web').default;
      return (
        /* $FlowFixMe This is by design */
        <ViewWeb ref="__internalView" {...this.props} />
      );
    }

    }
  }
}
