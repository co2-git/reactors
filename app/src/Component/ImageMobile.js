import React from 'react';
import {Image} from 'react-native';
import Reactors from 'reactors';
import type {PROPS} from '../Image';

export default function ReactorsMobileImage (props: PROPS): Image {
  const mobileProps = Reactors.props(props);
  if (typeof mobileProps.source === 'string') {
    mobileProps.source = {uri: mobileProps.source};
  }
  return <Image {...mobileProps} />;
}
