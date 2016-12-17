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

export default function ReactorsWebLink(props: $props): Element<*> {
  const webProps = Reactors.props(props);
  return (
    /* $FlowFixMe This is by design */
    <a {...webProps}>
      {props.children}
    </a>
  );
}
