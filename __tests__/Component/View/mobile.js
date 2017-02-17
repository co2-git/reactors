/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsViewMobile from '../../../app/Component/View/Mobile';

describe('Component / View / Mobile', () => {
  test('it should return a View', () => {
    const view = shallow(
      <ReactorsViewMobile reactorsPlatform="mobile" />
    );
    expect(view.find('View')).toHaveLength(1);
  });

  test('it should return a ScrollView if scrollable', () => {
    const view = shallow(
      <ReactorsViewMobile
        reactorsPlatform="mobile"
        scrollable />
    );
    expect(view.type().name).toEqual('ScrollViewMock');
  });
});
