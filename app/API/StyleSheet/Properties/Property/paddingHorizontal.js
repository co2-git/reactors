// @flow
import horizontal from '../../helpers/horizontal';

export default {
  name: 'paddingHorizontal',
  desktop(paddingHorizontal: number) {
    return horizontal(paddingHorizontal, 'padding');
  },
  web(paddingHorizontal: number) {
    return horizontal(paddingHorizontal, 'padding');
  },
};
