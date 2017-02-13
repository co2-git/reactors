/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from 'reactors';

export
type $props = $reactors$Core$props & {
  dataSource: Array<any>,
  renderRow: (data: any) => React.Element<*>,
};

export default class ReactorsListView extends Component {
  render() {
    const props = Reactors.props(this.props);

    if (Reactors.isMobile()) {
      const ListViewMobile = require('./mobile').default;
      return (
        <ListViewMobile {...props} />
      );
    }

    if (Reactors.isDOM()) {
      const ListViewWeb = require('./web').default;
      return (
        /* $FlowFixMe This is by design */
        <ListViewWeb {...props} />
      );
    }

    throw new Error('Unknown platform: ' + Reactors.platform);
  }
}
