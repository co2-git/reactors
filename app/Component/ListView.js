/**
  * @module reactors
  * @name ListView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export
type $props = $reactors$Core$props & {
  dataSource: Array<any>,
  renderRow: (data: any) => Element<*>,
};

export default function ListView(props: $props): Element<*> {
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
      /* $FlowFixMe This is by design */
      <ListViewWeb {...props} />
    );
  }
  }
}
