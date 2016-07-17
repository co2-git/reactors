import React, {Element} from 'react';
import Reactors from 'reactors';
import type {PROPS} from '../ScrollView';

export default function ReactorsWebScrollView(props: PROPS): Element {
  const webProps = Reactors.props({
    ...props,
    style: {
      ...props.style,
      overflow: 'auto',
    }
  });
  return (
    <section
      {...webProps}
      className={'reactors$ScrollView'}
      >
      {props.children}
    </section>
  );
}
