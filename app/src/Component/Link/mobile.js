// @flow
import React from 'react';
import Reactors from 'reactors';
import {TouchableHighlight, Linking, View} from 'react-native';
import type {PROPS} from '../Link';

export default function ReactorsMobileLink(props: PROPS): TouchableHighlight {
  const mobileProps = Reactors.props(props);
  return (
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
