// @flow

declare type $ReactorsStyleSheetRule = {
  [property: string]: string | number,
};

declare type $ReactorsStyleSheet = {
  [selector: string]: $ReactorsStyleSheetRule
    | $ReactorsStyleSheetRule[],
};

declare type $ReactorsStyleSheetProperty = {
  value: any[] | Function,
  web: (value: any) => {[property: string]: any},
};
