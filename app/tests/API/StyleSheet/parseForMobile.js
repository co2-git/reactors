// @flow
import describe from 'redtea';
import parseForMobile from '../../../src/API/StyleSheet/parseForMobile';

const dummy = {fontSize: 10};
const transition = {transition: 'width 2s'};

export default describe.batch('API / StyleSheet / Parse for mobile',
  describe('Return style', parseForMobile(dummy), {value: dummy}),
  describe('Remove transition', parseForMobile(transition), {value: {}}),
);
