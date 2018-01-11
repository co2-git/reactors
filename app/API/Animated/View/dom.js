import React, {PureComponent} from 'react';
import first from 'lodash/first';
import keys from 'lodash/keys';

import Reactors from '../../Core';
import StyleSheet from '../../StyleSheet';
import View from '../../../Component/View';
import Value from '../Value/dom';
import timing from '../timing/dom';

const parse = (styles, setState, getState) => {
  const style = StyleSheet.merge(styles);
  const parsed = {};

  for (const key in style) {
    if (style[key] instanceof Value) {
      style[key].change = ({value}) => setState({
        ...getState(),
        [key]: value,
      });
      parsed[key] = style[key]._value;
    } else if (key === 'transform' && Array.isArray(style.transform)) {
      parsed.transform = [];
      let index = 0;
      for (const transformer of style.transform) {
        const transformerName = first(keys(transformer));
        const transformerValue = transformer[transformerName];
        if (transformerValue instanceof Value) {
          styles.transform[index][transformerName].change = ({value}) => setState({
            ...getState(),
            transform: getState().transform.map(item => {
              const itemKey = first(keys(item));
              if (itemKey === transformerName) {
                return {[itemKey]: value};
              }
              return item;
            }),
          });
          parsed.transform.push({[transformerName]: transformerValue._value});
        } else {
          parsed.transform.push({[transformerName]: transformerValue});
        }
        index++;
      }
    } else {
      parsed[key] = style[key];
    }
  }
  return StyleSheet.merge(parsed);
};

export default class ReactorsAnimatedViewDOM extends PureComponent {
  static Value = Value;
  static timing = timing;
  state = {stateStyle: {}};
  componentWillMount = () => {
    const stateStyle = parse(
      this.props.style,
      (state, cb) => this.setState({stateStyle: state}, cb),
      () => this.state.stateStyle,
    );
    this.setState({stateStyle});
  };
  render = () => {
    const props = Reactors.props(this.props);
    props.style = this.state.stateStyle;
    return (
      <View {...props} />
    );
  }
}
