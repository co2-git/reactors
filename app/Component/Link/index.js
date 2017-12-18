/**
  * @module reactors
  * @flow
**/

import React, {PropTypes} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export
type $props = $reactors$Core$props & {
  href?: string,
};

export default function Link(props: $props) {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const LinkMobile = require('./mobile').default;
    return (
      <LinkMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const LinkWeb = require('./web').default;
    return (
      /* $FlowFixMe This is by design */
      <LinkWeb {...props} />
    );
  }
  }
}
