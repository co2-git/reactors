import omit from 'lodash/omit';

import Reactors from '../../Core';

const cursor = (style) => {
  if (Reactors.isMobile()) {
    return omit(style, ['cursor']);
  }
  return style;
};

export default cursor;
