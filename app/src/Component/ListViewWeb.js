import React, {Element} from 'react';
import Reactors from 'reactors';
import type {PROPS} from '../ListView';

export default function ReactorsWebListView(props: PROPS): Element {
  const webProps = Reactors.props(props);
  const lis: Array<Element> = props.dataSource.map(
    (item: any, index: number): Element => (
      <li key={index}>
        {props.renderRow(item)}
      </li>
    )
  );
  return <ul style={webProps.style}>{lis}</ul>;
}
