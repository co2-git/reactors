import Reactors from '../Core';

export const transformProps = (props) => {
  const {platform} = Reactors;
  const mutatedProps = {};
  for (const prop in props) {
    switch (prop) {
    default:
      mutatedProps[prop] = props[prop];
      break;
    case 'onPress':
      switch (platform) {
      default:
        mutatedProps[prop] = props[prop];
        break;
      case 'web':
      case 'desktop':
        mutatedProps.onClick = props[prop];
        break;
      }
      break;
    case 'onClick':
      switch (platform) {
      default:
        mutatedProps[prop] = props[prop];
        break;
      case 'mobile':
        mutatedProps.onPress = props[prop];
        break;
      }
      break;
    }
  }
  return mutatedProps;
};
