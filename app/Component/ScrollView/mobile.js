/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
// $FlowFixMe This is by design
import {ScrollView} from 'react-native';
// $FlowFixMe This is by design
import Reactors from 'reactors';
import type {$props} from '.';

export default function ReactorsMobileScrollView(props: $props): ScrollView {
  const mobileProps = Reactors.props(props);
  // $FlowFixMe This is by design
  return <ScrollView {...mobileProps}>{props.children}</ScrollView>;
}
