import React from 'react';
import {View} from 'react-native';

export default (props) => {
  const mobileProps = {...props};
  if (mobileProps.onPress) {
    mobileProps.onStartShouldSetResponder = mobileProps.onPress;
  }
  return (
    <View {...mobileProps}>
      {props.children}
    </View>
  );
};
