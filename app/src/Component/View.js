/**
  * @module reactors
  * @name View
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export default function ReactorsView (props: CORE_PROPS): Element<*> {
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
      <ViewWeb {...props} />
    );
  }
  }
}
