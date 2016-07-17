// @flow
import {Element} from 'react';

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

export
type CORE_EVENT = {};

export
type ELEMENT_CHILD = null | string | number | Element;

export
type ELEMENT_CHILDREN = ELEMENT_CHILD | Array<ELEMENT_CHILD>;

export
type CORE_PROPS = {
  style?: STYLE_RULE,
  onPress?: {[event: CORE_EVENT]: any},
  children: ELEMENT_CHILDREN,
};
