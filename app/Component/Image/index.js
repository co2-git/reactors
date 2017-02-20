/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from '../../API/Core';

export default class ReactorsImage extends Component {

  props: $ReactorsImageProps;

  render() {
    const props = Reactors.props(this.props);

    switch (Reactors.platform) {

    default:
      throw new Error('Unknown platform: ' + Reactors.platform);

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
