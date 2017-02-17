// @flow
import horizontal from '../../helpers/horizontal';

export default {
  name: 'marginHorizontal',
  desktop(marginHorizontal: number) {
    return horizontal(marginHorizontal, 'margin');
  },
  web(marginHorizontal: number) {
    return horizontal(marginHorizontal, 'margin');
  },
};
