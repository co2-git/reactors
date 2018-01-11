import Reactors from '../../Core';

const borderWidth = (style) => {
  const transformed = {};
  if (('borderWidth' in style) && Reactors.isDOM()) {
    if (!('borderStyle' in style)) {
      transformed.borderStyle = 'solid';
    }
    if (!('borderColor' in style)) {
      transformed.borderColor = 'black';
    }
  }
  return {
    ...style,
    ...transformed,
  };
};

export default borderWidth;
