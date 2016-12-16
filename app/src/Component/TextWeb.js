// @flow
import React, {Element} from 'react';
import Reactors from 'reactors';
import type {PROPS} from '../Text';

export default function ReactorsWebText(props: PROPS): Element {
  const webProps = Reactors.props(props);
  return <div {...webProps}>{props.children}</div>;
}
