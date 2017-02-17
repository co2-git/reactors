/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from '../../API/Core';

export default class ReactorsView extends Component {

  __reactorsPlatform = this.props.reactorsPlatform || Reactors.platform;

  measure(cb: $ReactorsViewMeasureCallback) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = Reactors.props(props);

    switch (this.__reactorsPlatform) {

    default: {
      throw new Error(`Unknown Reactors Platform: ${this.__reactorsPlatform}`);
    }

    case 'mobile': {
      const ReactorsViewMobile = require('./Mobile').default;
      return <ReactorsViewMobile {...props} />;
    }

    case 'web':
    case 'desktop':
    case 'node': {
      const ReactorsViewDOM = require('./DOM').default;
      return <ReactorsViewDOM {...props} />;
    }

    }
  }

}
