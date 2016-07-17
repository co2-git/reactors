/**
  * @module reactors
  * @name View
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import renderWeb from './View/web';
import renderMobile from './View/mobile';
import type {CORE_PROPS} from '../../config/types';

export default function ReactorsView (props: CORE_PROPS): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
}
