/* globals __DEV__ */
import omit from 'lodash/omit';
import Reactors from '../../Core';

const transition = (style) => {
  if (style.transition) {
    if (__DEV__) {
      console.warn(
        'Reactors warning: do not use `transition` style' +
        ' as it is not included in mobile.' +
        ' Instead use Reactors.Animated'
      );
    }
    if (Reactors.isMobile()) {
      return omit(style, ['transition']);
    }
  }
  return style;
};

export default transition;
