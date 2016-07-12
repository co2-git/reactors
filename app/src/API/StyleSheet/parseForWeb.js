import stringifyTransformers from './stringifyTransformers';
import type {STYLE_RULE} from '../../../config/types';

export default function parseWeb(style: STYLE_RULE): STYLE_RULE {
  const webStyle = {};

  for (const attr in style) {
    webStyle[attr] = style[attr];
  }

  if (webStyle.borderWidth && !webStyle.borderStyle) {
    webStyle.borderStyle = 'solid';
  }

  if (webStyle.flexDirection) {
    webStyle.display = 'flex';
  }

  if (webStyle.transform) {
    webStyle.transform = stringifyTransformers(
      webStyle.transform
    );
  }

  return webStyle;
}
