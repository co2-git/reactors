// @flow

type $styleDOM = {
  objectFit?: $ReactorsStyleSheetObjectFit,
};

function resizeModeDOM(resizeMode: $ReactorsStyleSheetResizeMode): ?$styleDOM {
  switch (resizeMode) {

  default: {
    return {};
  }

  case 'cover':
  case 'contain': {
    return {
      objectFit: resizeMode,
    };
  }

  case 'stretch': {
    return {
      objectFit: 'fill',
    };
  }

  }
}

export default {
  name: 'resizeMode',
  desktop: resizeModeDOM,
  web: resizeModeDOM,
};
