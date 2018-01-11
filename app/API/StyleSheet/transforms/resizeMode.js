import omit from 'lodash/omit';

import Reactors from '../../Core';

const resizeMode = (style) => {
  if (style.resizeMode && Reactors.isDOM()) {
    const transformed = {};
    switch (style.resizeMode) {
    case 'cover':
      transformed.objectFit = 'cover';
      break;
    case 'contain':
      transformed.objectFit = 'contain';
      break;
    case 'stretch':
      transformed.objectFit = 'fill';
      break;
    }
    return omit({...style, ...transformed}, ['resizeMode']);
  }
  return style;
};

export default resizeMode;
