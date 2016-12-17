/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from './ListView';

export default function ReactorsWebListView(props: $props): Element<*> {
  const webProps = Reactors.props(props);
  const lis: Element<*>[] = props.dataSource.map(
    (item: any, index: number): Element<*> => (
      <li key={index}>
        {props.renderRow(item)}
      </li>
    )
  );
  // $FlowFixMe This is by design
  return <ul style={webProps.style}>{lis}</ul>;
}
