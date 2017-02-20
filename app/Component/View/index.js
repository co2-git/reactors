/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from '../../API/Core';

export default class ReactorsView extends Component {

  measure(cb: $ReactorsViewMeasureCallback) {
    return this.refs.__internalView.measure(cb);
  }

  render() {
    const props = Reactors.props(this.props);

    switch (Reactors.platform) {

    default: {
      throw new Error(`Unknown Reactors Platform: ${Reactors.platform}`);
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
