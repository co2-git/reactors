/**
  * @module reactors
  * @name Link
  * @type Component
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
    const LinkMobile = require('./LinkMobile').default;
    return (
      <LinkMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const LinkWeb = require('./LinkWeb').default;
    return (
      /* $FlowFixMe This is by design */
      <LinkWeb {...props} />
    );
  }
  }
}

Link.propTypes = {
  href: PropTypes.string,
};
