import omit from 'lodash/omit';

import Reactors from '../../Core';

const marginHorizontal = (style) => {
  if (('marginHorizontal' in style) && Reactors.isDOM()) {
    const transformed = {};
    transformed.marginLeft = style.marginHorizontal;
    transformed.marginRight = style.marginHorizontal;
    return omit({...style, ...transformed}, ['marginHorizontal']);
  }
  return style;
};

export default marginHorizontal;
