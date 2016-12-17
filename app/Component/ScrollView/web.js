/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export default
function ReactorsWebScrollView (props: $reactors$Core$props): Element<*> {
  const webProps = Reactors.props(props);
  const parentStyle = {
    overflow: 'auto',
    ...webProps.style,
  };
  delete webProps.style;
  return (
    /* $FlowFixMe This is by design */
    <section style={parentStyle}>
      <section {...webProps}>
        {props.children}
      </section>
    </section>
  );
}
