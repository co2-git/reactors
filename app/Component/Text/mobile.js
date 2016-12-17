/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
// $FlowFixMe This is by design
import {Text} from 'react-native';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsMobileText(props: $props): Text {
  const mobileProps = Reactors.props(props);
  // $FlowFixMe This is by design
  return <Text {...mobileProps}>{props.children}</Text>;
}
