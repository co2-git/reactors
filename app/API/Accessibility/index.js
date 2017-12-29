import Reactors from '../Core';

export const transformProps = (props = {}) => {
  const {platform} = Reactors;
  const mutatedProps = {};
  for (const prop in props) {
    switch (prop) {
    default:
      mutatedProps[prop] = props[prop];
      break;
    case 'aria-labelledby':
      switch (platform) {
      default:
        mutatedProps[prop] = props[prop];
        break;
      case 'mobile':
        mutatedProps.accessibilityLabel = props[prop];
        break;
      }
      break;
    case 'accessibilityLabel':
      switch (platform) {
      default:
        mutatedProps[prop] = props[prop];
        break;
      case 'web':
      case 'desktop':
        mutatedProps['aria-labelledby'] = props[prop];
        break;
      }
      break;
    }
  }
  return mutatedProps;
};
