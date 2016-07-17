/**
  * @module reactors
  * @name ListView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import renderMobile from './ListView/mobile';
import renderWeb from './ListView/web';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  dataSource: Array<any>,
  renderRow: (data: any) => Element,
};

export default function ReactorsListView(props: PROPS): Element {
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
