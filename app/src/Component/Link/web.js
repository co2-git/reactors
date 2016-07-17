// @flow
import React, {Element} from 'react';
import Reactors from 'reactors';
import type {PROPS} from '../Link';

export default function ReactorsWebLink(props: PROPS): Element<*> {
  const webProps = Reactors.props(props);
  return (
    <a {...webProps}>
      {props.children}
    </a>
  );
}
