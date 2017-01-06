/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

import stringifyTransformers from './stringifyTransformers';

// function convertUnitToNumber(unit) {
//   if (typeof unit === 'number') {
//     return unit;
//   }
//
//   if (typeof unit === 'string') {
//     if (/px$/.test(unit.trim())) {
//       return unit.trim().replace('px', '');
//     }
//
//     if (/%$/.test(unit.trim())) {
//       return unit.trim();
//     }
//   }
// }

export default function parseWeb(
  style: $reactors$StyleSheet$Rule
): $reactors$StyleSheet$Rule {
  let webStyle = {};

  for (const attr in style) {
    switch (attr) {

    default: {
      webStyle[attr] = style[attr];
    } break;

    // Borders

    // case 'border': {
    //   const [width, _style, color] = style[attr].trim().split(/\s+/);
    //
    //   webStyle.borderWidth = convertUnitToNumber(width);
    //   webStyle.borderStyle = _style;
    //   webStyle.borderColor = color;
    // } break;

    case 'borderWidth': {
      webStyle[attr] = style[attr];

      if (!('borderColor' in style)) {
        webStyle.borderColor = 'black';
      }

      if (!('borderStyle' in style)) {
        webStyle.borderStyle = 'solid';
      }
    } break;

    // Flex

    case 'flexDirection': {
      webStyle[attr] = style[attr];

      if (!('display' in style)) {
        webStyle.display = 'flex';
      }
    } break;

    // Transform

    case 'transform': {
      webStyle.transform = stringifyTransformers(style.transform);
    } break;

    }
  }

  return webStyle;
}
