// @flow
import describe from 'redtea';
import createStyleSheet from '../../../src/API/StyleSheet/createStyleSheet';

const style = {
  container: {width: 600},
};

export default describe.batch('API / StyleSheet / Create Style Sheet',
  describe('Return style for mobile', createStyleSheet(style, 'mobile'), {
    value: style,
  }),
  describe('Return style for web', createStyleSheet(style, 'web'), {
    value: style,
  }),
  describe('Return style for desktop', createStyleSheet(style, 'desktop'), {
    value: style,
  }),
);
