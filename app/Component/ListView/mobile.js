/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import {ListView} from 'react-native';

export default class RectorsListViewMobile extends Component {
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  state = {
    dataSource: this.ds.cloneWithRows(this.props.dataSource),
  };

  componentWillUpdate(nextProps, nextState) {
    nextState.dataSource = this.ds.cloneWithRows(nextProps.dataSource);
  }

  render() {
    const props = {
      ...this.props,
      dataSource: this.state.dataSource,
    };

    if (!('enableEmptySections' in this.props)) {
      props.enableEmptySections = true;
    }
    // $FlowFixMe This is by design
    return <ListView {...props} />;
  }
}
