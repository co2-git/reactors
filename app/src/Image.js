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
    switch (Reactors.platform) {
    case 'mobile':
      return <Image {...this.props} />;
    case 'web':
      return (
        <img {...this.props} />
      );
    }
  }
}
