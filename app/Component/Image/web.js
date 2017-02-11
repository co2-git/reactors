/**
  * @module reactors
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsWebImage (props: $props): Element<*> {
  const webProps = Reactors.props(props);

  webProps.src = webProps.source;

  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }

  delete webProps.source;

  // $FlowFixMe This is by design (react not installed)
  return <img {...webProps} />;
}
