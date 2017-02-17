// @flow
import find from 'lodash/find';
import config from '../../../../config';

type $style = {
  borderWidth: number,
  borderStyle?: $ReactorsStyleSheetBorderStyle,
  borderColor?: string,
};

function borderWidthDOM(
  borderWidth: number,
  declarations: $ReactorsStyleSheetRule,
): $style {
  const style: $style = {borderWidth};
  if (!find(declarations, {property: 'borderStyle'})) {
    style.borderStyle = config.DEFAULT_BORDER_STYLE;
  }
  if (!find(declarations, {property: 'borderColor'})) {
    style.borderColor = config.DEFAULT_BORDER_COLOR;
  }
  return style;
}

export default {
  name: 'borderWidth',
  desktop: borderWidthDOM,
  web: borderWidthDOM,
};
