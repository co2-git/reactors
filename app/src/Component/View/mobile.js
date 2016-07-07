// @flow
import React from 'react';
import {View} from 'react-native';
import {StyleRule} from 'reactors';

export default (props) => {
  const mobileProps = {...props};
  if (mobileProps.style) {
    mobileProps.style = new StyleRule(mobileProps.style);
  }
  if (mobileProps.onPress) {
    mobileProps.onStartShouldSetResponder = mobileProps.onPress;
  }
  return (
    <View {...mobileProps}>
      {props.children}
    </View>
  );
};
