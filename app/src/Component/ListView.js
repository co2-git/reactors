/**
  * @module reactors
  * @name ListView
  * @type Component
  * @flow
**/

import React, {Component, PropTypes} from 'react';
import {ListView} from 'react-native';
import Reactors from 'reactors';

type STATE = {
  dataSource: Array<any>,
};

export default class ReactorsListView extends Component {
  static propTypes = {
    dataSource: PropTypes.array,
  };

  ds: ?ListView.DataSource;

  state: STATE = {
    dataSource: [],
  };

  constructor(props) {
    super(props);

    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state.dataSource = this.ds.cloneWithRows(this.props.dataSource);
      break;
    case 'web':
      this.state.dataSource = this.props.dataSource;
      break;
    }
  }

  render() {
    switch (Reactors.platform) {
    default:
      throw new Error('Unknown platform: ' + Reactors.platform);
    case 'mobile':
      return this._renderMobile();
    case 'web':
      return this._renderWeb();
    }
  }

  _renderMobile() {
    const props = {...this.props};
    props.dataSource = this.state.dataSource;

    return <ListView {...props} />;
  }

  _renderWeb() {
    const lis = this.state.dataSource.map((item, index) => (
      <li key={index}>
        {this.props.renderRow(item)}
      </li>
    ));
    return <ul>{lis}</ul>;
  }
}
