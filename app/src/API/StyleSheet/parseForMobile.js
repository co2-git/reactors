/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

export default function parseForMobile(
  style: $reactors$StyleSheet$Rule
): $reactors$StyleSheet$Rule {
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
