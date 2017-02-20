/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import {ScrollView, View} from 'react-native';
import ReactorsViewMobile from '../../../app/Component/View/Mobile';
import Reactors from '../../../app/API/Core';

describe('Component / View / Mobile', () => {
  test('it should return a View', () => {
    Reactors.platform = 'mobile';
    const view = shallow(
      <ReactorsViewMobile />
    );
    expect(view.type()).toEqual(View);
  });

  test('it should return a ScrollView if scrollable', () => {
    const view = shallow(
      <ReactorsViewMobile scrollable />
    );
    expect(view.type()).toEqual(ScrollView);
  });
});
