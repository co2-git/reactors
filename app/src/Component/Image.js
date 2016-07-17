/**
  * @module reactors
  * @name Image
  * @type Component
  * @flow
**/
import {Element} from 'react';
import Reactors from 'reactors';
import renderWeb from './Image/web';
import renderMobile from './Image/mobile';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  source?: string | number | {uri: string},
  src?: string,
};

export default function ReactorsImage (props: CORE_PROPS): Element<*> {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
}
