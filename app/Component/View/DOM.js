/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';

export default class ReactorsViewDOM extends Component {

  render() {
    return (
      <section {...this.props}>
        {this.props.children}
      </section>
    );
  }

}
