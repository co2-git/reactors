/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import stringifyTransformers from './stringifyTransformers';

export default function parseWeb(
  style: $reactors$StyleSheet$Rule
): $reactors$StyleSheet$Rule {
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
