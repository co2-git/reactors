/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsImage from '../../../app/Component/Image';
import Reactors from '../../../app/API/Core';

describe('Component / Image', () => {
  // WEB

  test('it should return DOM Image for web', () => {
    Reactors.platform = 'web';
    const view = shallow(
      <ReactorsImage />
    );
    expect(view.find('ReactorsImageDOM')).toHaveLength(1);
  });

  // DESKTOP

  test('it should return DOM Image for desktop', () => {
    Reactors.platform = 'desktop';
    const view = shallow(
      <ReactorsImage />
    );
    expect(view.find('ReactorsImageDesktop')).toHaveLength(1);
  });

  // MOBILE

  test('it should return Mobile Image for mobile', () => {
    Reactors.platform = 'mobile';
    const view = shallow(
      <ReactorsImage />
    );
    expect(view.find('ReactorsImageMobile')).toHaveLength(1);
  });

  // NODE

  test('it should return DOM Image for node', () => {
    Reactors.platform = 'node';
    const view = shallow(
      <ReactorsImage />
    );
    expect(view.find('ReactorsImageDOM')).toHaveLength(1);
  });
});
