/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import parseForWeb from './parseForWeb';
import parseForMobile from './parseForMobile';
import type {STYLE_RULE} from '../../../config/types';

export default function createStyleRule(
    rule: STYLE_RULE,
    platform: string
  ): STYLE_RULE {
  const _rule = {};
  switch (platform) {
  default:
    throw new Error('Reactors platform not defined');
  case 'mobile':
    Object.assign(_rule, parseForMobile(rule));
    break;
  case 'desktop':
  case 'web':
    Object.assign(_rule, parseForWeb(rule));
  }
  return _rule;
}
