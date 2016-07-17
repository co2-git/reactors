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
