import Reactors from '../../Core';

const flexDirection = (style) => {
  if (
    Reactors.isDOM() &&
    ('flexDirection' in style) &&
    style.display !== 'flex'
  ) {
    const transformed = {};
    transformed.display = 'flex';
    return {...style, ...transformed};
  }
  return style;
};

export default flexDirection;
