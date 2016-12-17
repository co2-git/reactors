/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
// $FlowFixMe This is by design
import {Image} from 'react-native';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from './Image';

export default function ReactorsMobileImage (props: $props): Image {
  const mobileProps = Reactors.props(props);
  if (typeof mobileProps.source === 'string') {
    mobileProps.source = {uri: mobileProps.source};
  }
  // $FlowFixMe This is by design
  return <Image {...mobileProps} />;
}
