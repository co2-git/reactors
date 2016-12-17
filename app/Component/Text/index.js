/**
  * @module reactors
  * @name Text
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export
type $props = $reactors$Core$props & {};

export default function ReactorsText(props: $props): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const TextMobile = require('./mobile').default;
    return (
      <TextMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const TextWeb = require('./web').default;
    return (
      /* $FlowFixMe This is by design */
      <TextWeb {...props} />
    );
  }
  }
}
