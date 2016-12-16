import React from 'react';
import {ScrollView} from 'react-native';
import Reactors from 'reactors';
import type {PROPS} from '../ScrollView';

export default function ReactorsMobileScrollView(props: PROPS): ScrollView {
  const mobileProps = Reactors.props(props);
  return <ScrollView {...mobileProps}>{props.children}</ScrollView>;
}
