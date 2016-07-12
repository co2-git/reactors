// @flow
import describe from 'redtea';
import parseForWeb from '../../../src/API/StyleSheet/parseForWeb';

const dummy = {fontSize: 10};
const transition = {transition: 'width 2s'};
const borderStyle = {borderWidth: 2, borderColor: 'white'};
const flexDisplay = {flexDirection: 'row'};
const transforms = {transform: [{scale: 10}, {translateX: 100}]};
const transforms2 = {transform: [{scale: 10, translateX: 100}]};

export default describe.batch('API / StyleSheet / Parse for mobile',
  describe('Return style', parseForWeb(dummy), {value: dummy}),
  describe('Do not remove transition', parseForWeb(transition), {
    value: transition,
  }),
  describe('Add border style', parseForWeb(borderStyle), {
    value: {...borderStyle, borderStyle: 'solid'},
  }),
  describe('Add flex display', parseForWeb(flexDisplay), {
    value: {...flexDisplay, display: 'flex'},
  }),
  describe('Stringify transforms', parseForWeb(transforms), {
    value: {transform: 'scale(10) translateX(100)'},
  }),
  describe('Stringify transforms (more than 1 key in object)',
    parseForWeb(transforms2), {
      value: {transform: 'scale(10) translateX(100)'},
    }),
);
