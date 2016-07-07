/**
  * @module reactors
  * @name StyleSheet
  * @type Class
  * @flow
**/

import Reactors from 'reactors';

type RULE = {
  [property: string]: any,
};

type STYLESHEET = {
  [selector: string]: RULE,
};

type TRANSFORMER = {
  [key: string]: any,
};

type TRANSFORMERS = Array<TRANSFORMER>;

function stringifyTransformers(transformers: TRANSFORMERS): string {
  return transformers
    .map(transformer => {
      const key = Object.keys(transformer);
      return `${key}(${transformer[key]})`;
    })
    .join(' ');
}

function parseMobile(style: RULE): RULE {
  const mobileStyle = {...style};
  for (const rule in mobileStyle) {
    if (mobileStyle[rule]) {
      delete mobileStyle[rule].transition;
    }
  }
}

function parseWeb(style: RULE): RULE {
  const webStyle = {...style};
  for (const rule in webStyle) {
    if (webStyle[rule]) {
      const _rule = webStyle[rule];
      if (_rule.borderWidth && !_rule.borderStyle) {
        _rule.borderStyle = 'solid';
      }
      if (_rule.flexDirection) {
        _rule.display = 'flex';
      }
      if (_rule.transform) {
        _rule.transform = stringifyTransformers(_rule.transform);
      }
    }
  }
  return webStyle;
}

export default class ReactorsStyleSheet {
  static create(style) {
    return new this(style);
  }
  style = {};
  constructor(styleSheet: STYLESHEET) {
    this.parse(styleSheet);
  }
  parse(styleSheet: STYLESHEET) {
    switch (Reactors.platform) {
    default:
      throw new Error('Reactors platform not defined');
    case 'mobile':
      for (const selector in styleSheet) {
        if (styleSheet[selector]) {
          styleSheet[selector] = parseMobile(styleSheet[selector]);
        }
      }
      break;
    case 'desktop':
    case 'web':
      for (const selector in styleSheet) {
        if (styleSheet[selector]) {
          styleSheet[selector] = parseWeb(styleSheet[selector]);
        }
      }
    }
  }
}

export class Rule {
  constructor(style: RULE) {
    this.parse(style);
  }
  parse(style) {
    switch (Reactors.platform) {
    default:
      throw new Error('Reactors platform not defined');
    case 'mobile':
      this.style = parseMobile(style);
      break;
    case 'desktop':
    case 'web':
      this.style = parseWeb(style);
    }
  }
}
