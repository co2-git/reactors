/**
  * @module reactors
  * @flow
**/
import React, {Component} from 'react';

export default class ReactorsImageDOM extends Component {
  props: $ReactorsImageProps;

  render() {
    const webProps = {...this.props};

    webProps.src = webProps.source;

    if (typeof webProps.src === 'object' && webProps.src.uri) {
      webProps.src = webProps.src.uri;
    }

    delete webProps.source;

    return <img {...webProps} />;
  }

}
