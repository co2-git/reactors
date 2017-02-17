// @flow

type $padding = {
  paddingTop: number,
  paddingBottom: number,
};

type $margin = {
  marginTop: number,
  marginBottom: number,
};

type $style = $padding | $margin;

export default function vertical(
  value: number,
  property: 'padding' | 'margin',
): $style {
  return {
    [`${property}Top`]: value,
    [`${property}Bottom`]: value,
  };
}
