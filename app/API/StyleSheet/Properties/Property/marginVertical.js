// @flow
import vertical from '../../helpers/vertical';

export default {
  name: 'marginVertical',
  desktop(marginVertical: number) {
    return vertical(marginVertical, 'margin');
  },
  web(marginVertical: number) {
    return vertical(marginVertical, 'margin');
  },
};
