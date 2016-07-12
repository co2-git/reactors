export
type STYLE_RULE = {
  [property: string]: any,
};

export
type STYLESHEET = {
  [selector: string]: STYLE_RULE,
};

export
type STYLE_TRANSFORMER = {
  [key: string]: any,
};
