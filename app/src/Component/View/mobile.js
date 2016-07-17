// @flow
import React from 'react';
import {View} from 'react-native';
import Reactors from 'reactors';
import type {CORE_PROPS} from '../../../config/types';

export default function ReactorsMobileView (props: CORE_PROPS): View {
  const mobileProps = Reactors.props(props);
  return (
    <View {...mobileProps}>
      {props.children}
    </View>
  );
}
