/**
  * @module reactors
  * @name Image
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';

export type $props = $reactors$Core$props & {
  source?: string | number | {uri: string},
  src?: string,
};

export default function ReactorsImage (props: $props): Element<*> {
  switch (Reactors.platform) {

  default:
    throw new Error('Unknown platform: ' + Reactors.platform);

  case 'mobile': {
    const ImageMobile = require('./mobile').default;
    return (
      <ImageMobile {...props} />
    );
  }

  case 'web':
  case 'desktop': {
    const ImageWeb = require('./web').default;
    return (
      /* $FlowFixMe This is by design */
      <ImageWeb {...props} />
    );
  }

  }
}
