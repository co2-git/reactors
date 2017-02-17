// @flow
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import keys from 'lodash/keys';

type $type = {
  transform?: string,
};

function transformDOM(
  transformers: $ReactorsStyleSheetTransformersMobile | string,
): $type {
  if (isArray(transformers)) {
    return {
      /* $FlowFixMe | using lodash */
      transform: transformers.map(
        (transformer) => {
          const [key] = keys(transformer);
          return `${key}(${transformer[key]})`;
        }
      ).join(' ')
    };
  }
  if (isString(transformers)) {
    /* $FlowFixMe | using lodash */
    return {transform: transformers};
  }
  return {};
}

export default {
  name: 'transform',
  desktop: transformDOM,
  web: transformDOM,
};
