/**
  * @module reactors
  * @name Image
  * @type Component
  * @flow
**/
import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  source?: string | number | {uri: string},
  src?: string,
};

export default function ReactorsImage (props: CORE_PROPS): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const ImageMobile = require('./ImageMobile').default;
    return (
      <ImageMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const ImageWeb = require('./ImageWeb').default;
    return (
      <ImageWeb {...props} />
    );
  }
  }
}
