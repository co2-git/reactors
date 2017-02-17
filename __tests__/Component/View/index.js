/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import ReactorsView from '../../../app/Component/View';

describe('Component / View', () => {
  // WEB

  test('it should return DOM View for web', () => {
    const view = shallow(
      <ReactorsView reactorsPlatform="web" />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // DESKTOP

  test('it should return DOM View for desktop', () => {
    const view = shallow(
      <ReactorsView reactorsPlatform="desktop" />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // MOBILE

  test('it should return Mobile View for mobile', () => {
    const view = shallow(
      <ReactorsView reactorsPlatform="mobile" />
    );
    expect(view.find('ReactorsViewMobile')).toHaveLength(1);
  });

  // NODE

  test('it should return DOM View for node', () => {
    const view = shallow(
      <ReactorsView reactorsPlatform="node" />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // GENERAL

  test('it should have a measure', () => {
    const view = new ReactorsView({props: {}});
    expect(view.measure).toBeInstanceOf(Function);
  });
});
