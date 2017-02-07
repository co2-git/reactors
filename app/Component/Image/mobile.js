/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
import {Image} from 'react-native';
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsMobileImage (props: $props): Image {
  const mobileProps = Reactors.props(props);
  if (typeof mobileProps.source === 'string') {
    mobileProps.source = {uri: mobileProps.source};
  }
  console.log({mobileProps});
  // $FlowFixMe This is by design
  return <Image {...mobileProps} />;
}
