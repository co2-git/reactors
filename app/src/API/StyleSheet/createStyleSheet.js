/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import createStyleRule from './createStyleRule';
import type {STYLESHEET} from '../../../config/types';

export default function createStyleSheet(
    styleSheet: STYLESHEET,
    platform: string
  ): STYLESHEET {
  const _styleSheet = {};
  switch (platform) {
  default:
    throw new Error('Reactors platform not defined');
  case 'mobile':
    for (const selector in styleSheet) {
      if (styleSheet[selector]) {
        _styleSheet[selector] = createStyleRule(styleSheet[selector], platform);
      }
    }
    break;
  case 'desktop':
  case 'web':
    for (const selector in styleSheet) {
      if (styleSheet[selector]) {
        _styleSheet[selector] = createStyleRule(styleSheet[selector], platform);
      }
    }
  }
  return _styleSheet;
}
