/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export
type $props = $reactors$Core$props & {};

export default function ReactorsScrollView(props: $props): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const ScrollViewMobile = require('./ScrollViewMobile').default;
    return (
      <ScrollViewMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const ScrollViewWeb = require('./ScrollViewWeb').default;
    return (
      /* $FlowFixMe This is by design */
      <ScrollViewWeb {...props} />
    );
  }
  }
}
