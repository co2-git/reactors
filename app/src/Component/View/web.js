import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../../config/types';

export default function ReactorsWebView (props: CORE_PROPS): Element {
  const webProps = Reactors.props(props);
  return (
    <section {...webProps}>
      {props.children}
    </section>
  );
}
