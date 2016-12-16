/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {};

export default function ReactorsScrollView(props: PROPS): Element<*> {
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
      <ScrollViewWeb {...props} />
    );
  }
  }
}
