// @flow
import vertical from '../../helpers/vertical';

export default {
  name: 'paddingVertical',
  desktop(paddingVertical: number) {
    return vertical(paddingVertical, 'padding');
  },
  web(paddingVertical: number) {
    return vertical(paddingVertical, 'padding');
  },
};
