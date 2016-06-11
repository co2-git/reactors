/**
  * @module reactors
  * @name Image
  * @type Component
  * @flow
**/

import React, {Component} from 'react';
import {Image} from 'react-native';
import Reactors from 'reactors';

export default class ReactorsImage extends Component {
  render() {
    const props = {...this.props};

    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      if (typeof props.source === 'string') {
        props.source = {uri: props.source};
      }
      return <Image {...props} />;
    case 'web':
      props.src = props.source;
      if (typeof props.src === 'object' && props.src.uri) {
        props.src = props.src.uri;
      }
      return (
        <img {...props} />
      );
    }
  }
}
