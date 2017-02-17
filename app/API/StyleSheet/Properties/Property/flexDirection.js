// @flow
import find from 'lodash/find';

type $style = {
  flexDirection: $ReactorsStyleSheetFlexDirection,
  display?: 'flex',
};

function flexDirectionDOM(
  flexDirection: $ReactorsStyleSheetFlexDirection,
  declarations: $ReactorsStyleSheetRule
): $style {
  const style: $style = {flexDirection};
  const display = find(declarations, {property: 'display'});
  if (!display) {
    style.display = 'flex';
  } else if (display.value !== 'flex') {
    console.warn(`
      Reactors/StyleSheet [Mobile]
      flexDirection is used with a display other than "flex"
      (${display.value})`
    );
  }
  return style;
}

export default {
  name: 'flexDirection',
  desktop: flexDirectionDOM,
  web: flexDirectionDOM,
};
