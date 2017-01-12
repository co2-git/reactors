import keys from 'lodash/keys';
import isArray from 'lodash/isArray';
import find from 'lodash/find';

class Color {}

class Transformer {
  property: string;
  value: any;
}

const transforms = new Set();

function transformWeb(transformers) {
  if (isArray(transformers)) {
    return {
      transform: transformers.map(
        (transformer) => {
          const [key] = keys(transformer);
          return `${key}(${transformer[key]})`;
        }
      ).join(' ')
    };
  }
  return {transform: transformers};
}

function borderWidth_DOM(borderWidth: number, declarations) {
  const style = {borderWidth};
  if (!find(declarations, {property: 'borderStyle'})) {
    style.borderStyle = 'solid';
  }
  if (!find(declarations, {property: 'borderColor'})) {
    style.borderColor = 'black';
  }
  return style;
}

export default {
  ['alignItems']: {
    value: [
      'flex-start',
      'flex-end',
      'center',
      'stretch',
    ],
  },

  ['borderColor']: {
    value: Color,
  },

  ['borderRadius']: {
    value: Number,
  },

  ['borderWidth']: {
    value: Number,
    desktop: borderWidth_DOM,
    web: borderWidth_DOM,
  },

  ['marginBottom']: {
    value: Number,
  },

  ['marginVertical']: {
    desktop: (marginVertical) => ({
      marginTop: marginVertical,
      marginBottom: marginVertical,
    }),
    value: Number,
    web: (marginVertical) => ({
      marginTop: marginVertical,
      marginBottom: marginVertical,
    }),
  },

  ['overflow']: {
    value: ['hidden'],
  },

  ['transform']: {
    desktop: transformWeb,
    web: transformWeb,
    value: transforms,
  },
};
