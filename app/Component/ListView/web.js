/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';

export default class ReactorsListViewDOM extends Component {
  render() {
    const items: React.Element<*>[] = this.props.dataSource.map(
      (item: any, index: number) => (
        <li key={index}>
          {this.props.renderRow(item)}
        </li>
      )
    );
    // $FlowFixMe This is by design
    return <ul style={this.props.style}>{items}</ul>;
  }
}
