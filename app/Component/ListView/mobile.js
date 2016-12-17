/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import {ListView} from 'react-native';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from '.';

export default function RectorsMobileListView(props: $props): Element<*> {
  const mobileProps = Reactors.props(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  mobileProps.dataSource = ds.cloneWithRows(mobileProps.dataSource);

  if (!('enableEmptySections' in mobileProps)) {
    mobileProps.enableEmptySections = true;
  }
  // $FlowFixMe This is by design
  return <ListView {...mobileProps} />;
}
