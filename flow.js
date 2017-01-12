// @flow

import React from 'react';

// CORE API

declare type $reactors$platform = 'desktop'
  | 'mobile'
  | 'web'
  | 'node'
  ;

declare type $reactors$Core$Event = {};

declare type $reactors$Core$props = {
  children?: ?$React$Children | ?$React$Children[],
  onPress?: {[event: $reactors$Core$Event]: any},
  style?: $reactors$StyleSheet$Rule,
};

// STYLESHEET API

declare type $reactors$StyleSheet$Rule = {
  [property: string]: any,
};

declare type $reactors$styleSheet = {
  [selector: string]: $reactors$StyleSheet$Rule,
};

declare type $reactors$StyleSheet$Transformer = {
  [key: string]: any,
};

// GESTURE API

declare type $reactors$Gesture$handlers = {
  onPress?: {[event: $reactors$Core$Event]: boolean},
  onEnter?: {[event: $reactors$Core$Event]: boolean},
};

// REACT

declare type $React$Children = null | string | React.Element;
