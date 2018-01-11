import * as accessibility from '../Accessibility';
import * as gesture from '../Gesture';
import StyleSheet from '../StyleSheet';

const makeReactorsProps = props => {
  let transformed = {...props};
  transformed = accessibility.transformProps(transformed);
  transformed = gesture.transformProps(transformed);
  if (props.style) {
    transformed.style = StyleSheet.transform(props.style);
  }
  return transformed;
};

export default makeReactorsProps;
