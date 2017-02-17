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

declare type $ReactorsStyleSheetBorderStyle =
  'solid'
  | 'none'
  ;

declare type $ReactorsStyleSheetFlexDirection =
  'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  ;

declare type $ReactorsStyleSheetResizeMode =
  'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  ;

declare type $ReactorsStyleSheetObjectFit =
  'fill'
  | 'cover'
  | 'contain'
  ;

declare type $ReactorsStyleSheetTransformersMobile =  [
  {perspective: number},
  {rotate: string},
  {rotateX: string},
  {rotateY: string},
  {rotateZ: string},
  {scale: number},
  {scaleX: number},
  {scaleY: number},
  {translateX: number},
  {translateY: number},
  {skewX: string},
  {skewY: string}
];

declare type $ReactorsStyleSheetTransformersDOM = string;
