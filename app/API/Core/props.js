import * as accessibility from '../Accessibility';
import * as gesture from '../Gesture';
import transformStyleProps from '../StyleSheet/transform';

const makeReactorsProps = props => {
  const transformed = {
    ...props,
    ...accessibility.transformProps(props),
    ...gesture.transformProps(props),
  };
  if (props.style) {
    transformed.style = transformStyleProps(props.style);
  }
  return transformed;
};

export default makeReactorsProps;
