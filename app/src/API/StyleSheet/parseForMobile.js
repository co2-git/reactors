import type {STYLE_RULE} from '../../../config/types';

export default function parseForMobile(style: STYLE_RULE): STYLE_RULE {
  const mobileStyle = {};

  for (const attr in style) {
    if (attr === 'transition') {
      break;
    } else {
      mobileStyle[attr] = style[attr];
    }
  }

  return mobileStyle;
}
