import omit from 'lodash/omit';

import Reactors from '../../Core';

const marginVertical = (style) => {
  if (('marginVertical' in style) && Reactors.isDOM()) {
    const transformed = {};
    transformed.marginTop = style.marginVertical;
    transformed.marginBottom = style.marginVertical;
    return omit({...style, ...transformed}, ['marginVertical']);
  }
  return style;
};

export default marginVertical;
