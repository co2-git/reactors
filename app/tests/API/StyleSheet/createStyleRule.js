// @flow

import describe from 'redtea';
import createStyleRule from '../../../src/API/StyleSheet/createStyleRule';

function forMobile(style) {
  return createStyleRule(style, 'mobile');
}

function forWeb(style) {
  return createStyleRule(style, 'web');
}

function forDesktop(style) {
  return createStyleRule(style, 'desktop');
}

const dummy = {fontSize: 10};
const transition = {transition: 'width 2s'};
const borderStyle = {borderWidth: 2, borderColor: 'white'};
const flexDisplay = {flexDirection: 'row'};
const transforms = {transform: [{scale: 10}, {translateX: 100}]};

export default describe.batch('API / StyleSheet / Create Style Rule',
  describe.batch('Mobile',
    describe('Return style', forMobile(dummy), {value: dummy}),
    describe('Do not show transition', forMobile(transition), {value: {}}),
    describe('Do not add border style', forMobile(borderStyle), {
      value: borderStyle
    }),
    describe('Do not add flex display', forMobile(flexDisplay), {
      value: flexDisplay,
    }),
    describe('Do not stringify transforms', forMobile(transforms), {
      value: transforms,
    }),
  ),

  describe.batch('Web',
    describe('Return style', forWeb(dummy), {value: dummy}),
    describe('Show transition', forWeb(transition), {value: transition}),
    describe('Add border style', forWeb(borderStyle), {
      value: {...borderStyle, borderStyle: 'solid'},
    }),
    describe('Add flex display', forWeb(flexDisplay), {
      value: {...flexDisplay, display: 'flex'},
    }),
    describe('Stringify transforms', forWeb(transforms), {
      value: {transform: 'scale(10) translateX(100)'},
    }),
  ),

  describe.batch('Desktop',
    describe('Return style', forDesktop(dummy), {value: dummy}),
    describe('Show transition', forDesktop(transition), {value: transition}),
    describe('Add border style', forDesktop(borderStyle), {
      value: {...borderStyle, borderStyle: 'solid'},
    }),
    describe('Add flex display', forDesktop(flexDisplay), {
      value: {...flexDisplay, display: 'flex'},
    }),
    describe('Stringify transforms', forDesktop(transforms), {
      value: {transform: 'scale(10) translateX(100)'},
    }),
  ),
);
