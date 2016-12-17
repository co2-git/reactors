/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import createStyleRule from './createStyleRule';

export default function createStyleSheet(
    styleSheet: $reactors$styleSheet,
    platform: $reactors$platform
  ): $reactors$styleSheet {
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
