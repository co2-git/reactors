/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import {StyleSheet} from 'react-native';
import Reactors from 'reactors';

function stringifyTransformers(transformers): string {
  return transformers
    .map(transformer => {
      const key = Object.keys(transformer);
      return `${key}(${transformer[key]})`;
    })
    .join(' ');
}

export default class ReactorsStyleSheet {
  static create(style) {
    switch (Reactors.platform) {
    case 'mobile':
      return StyleSheet.create(style);
    default: {
      const _style = {...style};
      for (const rule in _style) {
        if (_style[rule]) {
          const _rule = _style[rule];
          if (_rule.borderWidth && !_rule.borderStyle) {
            _rule.borderStyle = 'solid';
          }
          if (_rule.flexDirection) {
            _rule.display = 'flex';
          }
          if (_rule.transform) {
            _rule.transform = stringifyTransformers(_rule.transform);
          }
        }
      }
      return _style;
    }
    }
  }
}
