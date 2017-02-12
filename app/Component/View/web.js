/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import Reactors from 'reactors';

export default class ReactorsViewWeb extends Component {
  render() {
    const webProps = Reactors.props(this.props);
    return (
      /* $FlowFixMe This is by design */
      <section {...webProps}>
        {this.props.children}
      </section>
    );
  }
}
