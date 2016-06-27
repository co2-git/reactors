import React from 'react';
import {Image} from 'react-native';

export default (props) => {
  const mobileProps = {...props};
  if (typeof mobileProps.source === 'string') {
    mobileProps.source = {uri: mobileProps.source};
  }
  return <Image {...mobileProps} />;
};
