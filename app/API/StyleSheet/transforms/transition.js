/* globals __DEV__ */
import omit from 'lodash/omit';
import Reactors from '../../Core';

const transition = (style) => {
  if (style.transition) {
    if (Reactors.isMobile()) {
      return omit(style, ['transition']);
    }
  }
  return style;
};

export default transition;
