/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from '../../API/Core';

export default class ReactorsImage extends Component {

  __reactorsPlatform = this.props.reactorsPlatform || Reactors.platform;

  props: $ReactorsImageProps;

  render() {
    const props = Reactors.props(this.props);

    switch (this.__reactorsPlatform) {

    default:
      throw new Error('Unknown platform: ' + this.__reactorsPlatform);

    case 'mobile': {
      const ImageMobile = require('./Mobile').default;
      return (
        <ImageMobile {...props} />
      );
    }

    case 'web':
    case 'node': {
      const ImageWeb = require('./DOM').default;
      return (
        <ImageWeb {...props} />
      );
    }

    case 'desktop': {
      const ImageDesktop = require('./Desktop').default;
      return (
        <ImageDesktop {...props} />
      );
    }

    }
  }
}
