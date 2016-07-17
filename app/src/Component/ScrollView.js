/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import renderMobile from './ScrollView/mobile';
import renderWeb from './ScrollView/web';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {};

export default function ReactorsScrollView(props: PROPS): Element<*> {
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
