/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/
import _ from 'lodash';
import parseForWeb from './parseForWeb';
import parseForMobile from './parseForMobile';
import type {STYLE_RULE} from '../../../config/types';

export default function createStyleRule(
    rule: STYLE_RULE | Array<STYLE_RULE>,
    platform: string
  ): STYLE_RULE | Array<STYLE_RULE> {
  switch (platform) {
  default:
    throw new Error('Reactors platform not defined');
  case 'mobile':
    if (_.isArray(rule)) {
      return rule.map(parseForMobile);
    }
    return parseForMobile(rule);
  case 'desktop':
  case 'web':
    if (_.isArray(rule)) {
      return rule.map(parseForWeb);
    }
    return parseForWeb(rule);
  }
}
