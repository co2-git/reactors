// @flow

type $padding = {
  paddingLeft: number,
  paddingRight: number,
};

type $margin = {
  marginLeft: number,
  marginRight: number,
};

type $style = $padding | $margin;

export default function horizontal(
  value: number,
  property: 'padding' | 'margin',
): $style {
  return {
    [`${property}Left`]: value,
    [`${property}Right`]: value,
  };
}
