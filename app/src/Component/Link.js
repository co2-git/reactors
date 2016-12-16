/**
  * @module reactors
  * @name Link
  * @type Component
  * @flow
**/

import React, {PropTypes} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  href?: string,
};

export default function Link(props: PROPS) {
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
      <LinkWeb {...props} />
    );
  }
  }
}

Link.propTypes = {
  href: PropTypes.string,
};
