import omit from 'lodash/omit';

import Reactors from '../../Core';

const toMobile = (str) => {
  const [borderWidth, borderStyle, borderColor] = str.split(/\s+/);
  return {
    borderWidth: parseInt(borderWidth, 10),
    borderStyle,
    borderColor,
  };
};


const border = (style) => {
  if (('border' in style) && Reactors.isMobile()) {
    return omit({
      ...style,
      ...toMobile(style.border),
    }, ['border']);
  }
  return {...style};
};

export default border;
