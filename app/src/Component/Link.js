/**
  * @module reactors
  * @name Link
  * @type Component
  * @flow
**/

import React, {PropTypes} from 'react';
import Reactors from 'reactors';
import renderMobile from './Link/mobile';
import renderWeb from './Link/web';
import type {CORE_PROPS} from '../../config/types';

export
type PROPS = CORE_PROPS & {
  href?: string,
};

export default function ReactorsLink(props: PROPS) {
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

ReactorsLink.propTypes = {
  href: PropTypes.string,
};
