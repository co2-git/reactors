/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsImage from '../../../app/Component/Image';

describe('Component / Image', () => {
  // WEB

  test('it should return DOM Image for web', () => {
    const view = shallow(
      <ReactorsImage reactorsPlatform="web" />
    );
    expect(view.find('ReactorsImageDOM')).toHaveLength(1);
  });

  // DESKTOP

  test('it should return DOM Image for desktop', () => {
    const view = shallow(
      <ReactorsImage reactorsPlatform="desktop" />
    );
    expect(view.find('ReactorsImageDesktop')).toHaveLength(1);
  });

  // MOBILE

  test('it should return Mobile Image for mobile', () => {
    const view = shallow(
      <ReactorsImage reactorsPlatform="mobile" />
    );
    expect(view.find('ReactorsImageMobile')).toHaveLength(1);
  });

  // NODE

  test('it should return DOM Image for node', () => {
    const view = shallow(
      <ReactorsImage reactorsPlatform="node" />
    );
    expect(view.find('ReactorsImageDOM')).toHaveLength(1);
  });
});
