// @flow
import React, {Element} from 'react';
import {ListView} from 'react-native';
import Reactors from 'reactors';
import type {PROPS} from '../ListView';

export default function RectorsMobileListView(props: PROPS): Element {
  const mobileProps = Reactors.props(props);
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  mobileProps.dataSource = ds.cloneWithRows(props.dataSource);

  if (!('enableEmptySections' in props)) {
    props.enableEmptySections = true;
  }

  return <ListView {...props} />;
}
