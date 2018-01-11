import omit from 'lodash/omit';

import Reactors from '../../Core';

const cursor = (style) => {
  if (Reactors.isMobile() && style.display === 'flex') {
    const transformed = {};
    if (!('flexDirection' in style)) {
      transformed.flexDirection = 'row';
    }
    return omit({...style, ...transformed}, ['display']);
  }
  return style;
};

export default cursor;
