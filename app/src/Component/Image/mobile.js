import React from 'react';
import {Image} from 'react-native';
import {StyleRule} from 'reactors';

export default (props) => {
  const mobileProps = {...props};
  if (mobileProps.style) {
    mobileProps.style = new StyleRule(mobileProps.style);
  }
  if (typeof mobileProps.source === 'string') {
    mobileProps.source = {uri: mobileProps.source};
  }
  return <Image {...mobileProps} />;
};
