// @flow
import Accessibility from '../Accessibility';
import Declarations from '../StyleSheet/Declarations';
import Gesture from '../Gesture';

export default function makeReactorsProps(defaultProps: Object) {
  const reactorsProps = {...defaultProps};

  // Styles
  if (reactorsProps.style) {
    reactorsProps.style = new Declarations(reactorsProps.style).toObject();
  }

  // Accessibility
  const accessibilityProps = Accessibility.transform(reactorsProps);

  // Gesture
  const gestureProps = Gesture.transform(reactorsProps);

  // Apply transformers
  const added = [
    accessibilityProps,
    gestureProps,
  ].map(prop => prop.added);

  const removed = [
    accessibilityProps,
    gestureProps,
  ].map(prop => prop.removed);

  for (const _added of added) {
    for (const __added of _added) {
      for (const name in __added) {
        reactorsProps[name] = __added[name];
      }
    }
  }

  for (const _removed of removed) {
    for (const __removed of _removed) {
      delete reactorsProps[__removed];
    }
  }

  return reactorsProps;
}
