/**
  * @module reactors
  * @name ListView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  dataSource: Array<any>,
  renderRow: (data: any) => Element,
};

export default function ListView(props: PROPS): Element {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile': {
    const ListViewMobile = require('./ListViewMobile').default;
    return (
      <ListViewMobile {...props} />
    );
  }
  case 'web':
  case 'desktop': {
    const ListViewWeb = require('./ListViewWeb').default;
    return (
      <ListViewWeb {...props} />
    );
  }
  }
}
