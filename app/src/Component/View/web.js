import React from 'react';
import renderChildren from '../../../lib/renderChildren';

export default (props) => {
  const webProps = {...props};
  if (webProps.onPress) {
    webProps.onClick = webProps.onPress;
  }
  return (
    <section {...webProps}>
      { renderChildren(props.children) }
    </section>
  );
};
