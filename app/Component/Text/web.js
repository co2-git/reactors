/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsWebText(props: $props): Element<*> {
  const webProps = Reactors.props(props);
  // $FlowFixMe This is by design
  return <div {...webProps}>{props.children}</div>;
}
