/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import {Image} from 'react-native';
import ReactorsImageMobile from '../../../app/Component/Image/Mobile';

describe('Component / Image / Mobile', () => {
  test('it should return a Image', () => {
    const view = shallow(
      <ReactorsImageMobile reactorsPlatform="mobile" />
    );
    expect(view.type()).toEqual(Image);
  });
});
