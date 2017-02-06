/**
  * @module reactors
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsImageDesktop (props: $props): Element<*> {
  const webProps = Reactors.props(props);
  webProps.src = webProps.source;
  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri.replace(/^\.\./, '.');
  }
  delete webProps.source;
  // $FlowFixMe This is by design
  return <img {...webProps} />;
}
