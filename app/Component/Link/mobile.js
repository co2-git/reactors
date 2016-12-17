/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
// $FlowFixMe This is by design
import Reactors from 'reactors';
// $FlowFixMe This is by design
import {TouchableHighlight, Linking, View} from 'react-native';
import type {$props} from '.';

export default function ReactorsMobileLink(props: $props): TouchableHighlight {
  const mobileProps = Reactors.props(props);
  return (
    /* $FlowFixMe This is by design */
    <TouchableHighlight
      onPress={() => Linking.openURL(props.href)}
      underlayColor="rgba(255, 255, 255, 0)"
      {...mobileProps}
      >
      <View>
        {props.children}
      </View>
    </TouchableHighlight>
  );
}
