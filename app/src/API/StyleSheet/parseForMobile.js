import type {STYLE_RULE} from '../StyleSheet';

export default function parseForMobile(style: STYLE_RULE): STYLE_RULE {
  const mobileStyle = {...style};
  delete mobileStyle.transition;
  return mobileStyle;
}
