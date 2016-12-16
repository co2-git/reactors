/**
  * @module reactors
  * @name Text
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {};

export default function ReactorsText(props: PROPS): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const TextMobile = require('./TextMobile').default;
    return (
      <TextMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const TextWeb = require('./TextWeb').default;
    return (
      <TextWeb {...props} />
    );
  }
  }
}
