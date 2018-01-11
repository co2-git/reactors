import React, {PureComponent} from 'react';
import {Animated} from 'react-native';

import Reactors from '../../Core';
import View from '../../../Component/View';

export default class ReactorsAnimatedViewMobile extends PureComponent {
  static Value = Animated.Value;
  static timing = Animated.timing;
  render = () => (
    <Animated.View {...Reactors.props(this.props)} />
  );
}
