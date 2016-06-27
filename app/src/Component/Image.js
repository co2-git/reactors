/**
  * @module reactors
  * @name Image
  * @type Component
  * @flow
**/

import Reactors from 'reactors';
import renderWeb from './Image/web';
import renderMobile from './Image/mobile';

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
