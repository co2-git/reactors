/**
  * @module reactors
  * @name View
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export default function ReactorsView (props: $reactors$Core$props): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const ViewMobile = require('./ViewMobile').default;
    return (
      <ViewMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const ViewWeb = require('./ViewWeb').default;
    return (
      /* $FlowFixMe This is by design */
      <ViewWeb {...props} />
    );
  }
  }
}
