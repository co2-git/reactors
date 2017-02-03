import box from '../helpers/box';

export default class Absolute {
  bottom = 0;
  left = 0;
  position = 'absolute';
  right = 0;
  top = 0;

  constructor(top, right, bottom, left) {
    const dimensions = box(top, right, bottom, left);

    if (('top' in dimensions)) {
      this.top = dimensions.top;
    }

    if (('right' in dimensions)) {
      this.right = dimensions.right;
    }

    if (('bottom' in dimensions)) {
      this.bottom = dimensions.bottom;
    }

    if (('left' in dimensions)) {
      this.left = dimensions.left;
    }
  }
}
