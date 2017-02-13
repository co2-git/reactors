// @flow
import keys from 'lodash/keys';
import isArray from 'lodash/isArray';
import find from 'lodash/find';

class Color {}

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

function flexDirectionMissingDisplayOnDOM(flexDirection: string, declarations) {
  const style = {flexDirection};
  if (!find(declarations, {property: 'display'})) {
    style.display = 'flex';
  }
  return style;
}

function resizeModeForDOM(resizeMode: string) {
  switch (resizeMode) {

  default: {
    return {};
  }

  case 'cover': {
    return {
      width: '100%',
      height: '100%',
    };
  }

  }
}

export default {
  ['alignContent']: {
    value: [
      'stretch',
      'flex-start',
      'flex-end',
      'center',
      'space-around',
      'space-between',
    ],
    mobile() {
      return {};
    }
  },

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

  ['display']: {
    value: ['flex', 'inline', 'block'],
    mobile(display) {
      if (display === 'flex') {
        return {};
      }
      return {display};
    }
  },

  ['flexDirection']: {
    value: ['row', 'column'],
    desktop: flexDirectionMissingDisplayOnDOM,
    web: flexDirectionMissingDisplayOnDOM,
  },

  ['paddingHorizontal']: {
    value: Number,
    desktop: (paddingHorizontal: number) => {
      return {
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
      };
    },
    web: (paddingHorizontal: number) => {
      return {
        paddingLeft: paddingHorizontal,
        paddingRight: paddingHorizontal,
      };
    },
  },

  ['paddingVertical']: {
    value: Number,
    desktop: (paddingVertical: number) => {
      return {
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
      };
    },
    web: (paddingVertical: number) => {
      return {
        paddingTop: paddingVertical,
        paddingBottom: paddingVertical,
      };
    },
  },

  ['marginBottom']: {
    value: Number,
  },

  ['marginTop']: {
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

  ['resizeMode']: {
    desktop: resizeModeForDOM,
    value: ['cover', 'contain', 'stretch', 'repeat', 'center'],
    web: resizeModeForDOM,
  },

  ['transform']: {
    desktop: transformWeb,
    web: transformWeb,
    value: transforms,
  },
};
