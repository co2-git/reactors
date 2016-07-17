import React, {Element} from 'react';
import Reactors from 'reactors';
import type {PROPS} from '../Image';

export default function ReactorsWebImage (props: PROPS): Element {
  const webProps = Reactors.props(props);
  webProps.src = webProps.source;
  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }
  delete webProps.source;
  return <img {...webProps} />;
}
