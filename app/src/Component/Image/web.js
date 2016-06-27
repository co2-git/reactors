import React from 'react';

export default (props) => {
  const webProps = {...props};
  if (webProps.onPress) {
    webProps.onClick = webProps.onPress;
  }
  webProps.src = webProps.source;
  if (typeof webProps.src === 'object' && webProps.src.uri) {
    webProps.src = webProps.src.uri;
  }
  return <img {...webProps} />;
};
