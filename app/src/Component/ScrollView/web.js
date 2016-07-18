import React, {Element} from 'react';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../../config/types';

export default function ReactorsWebScrollView (props: CORE_PROPS): Element {
  const webProps = Reactors.props(props);
  const parentStyle = {
    overflow: 'auto',
    ...webProps.style,
  };
  delete webProps.style;
  return (
    <section style={parentStyle}>
      <section {...webProps}>
        {props.children}
      </section>
    </section>
  );
}
