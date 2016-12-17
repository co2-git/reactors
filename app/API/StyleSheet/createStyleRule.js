/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import parseForWeb from './parseForWeb';
import parseForMobile from './parseForMobile';

export default function createStyleRule(
    rule: $reactors$StyleSheet$Rule,
    platform: $reactors$platform
  ): $reactors$StyleSheet$Rule {
  switch (platform) {
  default:
    throw new Error('Reactors platform not defined');
  case 'mobile':
    return parseForMobile(rule);
  case 'desktop':
  case 'web':
    return parseForWeb(rule);
  }
}
