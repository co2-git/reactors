/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ListView} from 'react-native';

export default class RectorsListViewMobile extends Component {
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.props.dataSource = ds.cloneWithRows(this.props.dataSource);

    if (!('enableEmptySections' in this.props)) {
      this.props.enableEmptySections = true;
    }
    // $FlowFixMe This is by design
    return <ListView {...this.props} />;
  }
}
