import React from 'react';
import renderChildren from '../../../lib/renderChildren';
import {StyleRule} from 'reactors';

export default (props) => {
  const webProps = {...props};
  if (webProps.style) {
    webProps.style = new StyleRule(webProps.style);
  }
  if (webProps.onPress) {
    webProps.onClick = webProps.onPress;
  }
  return (
    <section {...webProps}>
      { renderChildren(props.children) }
    </section>
  );
};
