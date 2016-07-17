/**
  * @module reactors
  * @name Text
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import renderMobile from './Text/mobile';
import renderWeb from './Text/web';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {};

export default function ReactorsText(props: PROPS): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop': {
    return renderWeb(props);
  }
  }
}
