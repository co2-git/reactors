// @flow
import React from 'react';
import {Text} from 'react-native';
import Reactors from 'reactors';
import type {PROPS} from '../Text';

export default function ReactorsMobileText(props: PROPS): Text {
  const mobileProps = Reactors.props(props);
  return <Text {...mobileProps}>{props.children}</Text>;
}
