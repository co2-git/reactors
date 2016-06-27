/**
  * @module reactors
  * @name View
  * @type Component
  * @flow
**/

import React from 'react';
import Reactors from 'reactors';
import renderMobile from './View/mobile';
import renderWeb from './View/web';

export default (props) => {
  switch (Reactors.platform) {
  default:
    throw new Error('Unknown platform: ' + Reactors.platform);
  case 'mobile':
    return renderMobile(props);
  case 'web':
  case 'desktop':
    return renderWeb(props);
  }
};
