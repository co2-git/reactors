import React from 'react';
import {StyleRule} from 'reactors';

export default function ReactorsImageWeb (props) {
  const webProps = {...props};
  if (webProps.onPress) {
    webProps.onClick = webProps.onPress;
  }
  if (webProps.style) {
    webProps.style = new StyleRule(webProps.style);
  }
  webProps.src = webProps.source;
  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }
  delete webProps.source;
  return <img {...webProps} />;
}
