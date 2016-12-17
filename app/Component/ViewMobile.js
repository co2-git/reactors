/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import React from 'react';
// $FlowFixMe This is by design
import {View} from 'react-native';
// $FlowFixMe This is by design
import Reactors from 'reactors';

export default function ReactorsMobileView (props: $reactors$Core$props): View {
  const mobileProps = Reactors.props(props);
  return (
    /* $FlowFixMe This is by design */
    <View {...mobileProps}>
      {props.children}
    </View>
  );
}
