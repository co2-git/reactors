/**
  * @module reactors
  * @name ViewWeb
  * @type Component
  * @flow
**/

import React, {Element} from 'react';
import Reactors from 'reactors';

export default
function ReactorsWebView (props: $reactors$Core$props): Element<*> {
  const webProps = Reactors.props(props);
  return (
    /* $FlowFixMe This is by design */
    <section {...webProps}>
      {props.children}
    </section>
  );
}
