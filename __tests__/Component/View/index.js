/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsView from '../../../app/Component/View';
import Reactors from '../../../app/API/Core';

describe('Component / View', () => {
  // WEB

  test('it should return DOM View for web', () => {
    Reactors.platform = 'web';
    const view = shallow(
      <ReactorsView />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // DESKTOP

  test('it should return DOM View for desktop', () => {
    Reactors.platform = 'desktop';
    const view = shallow(
      <ReactorsView />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // MOBILE

  test('it should return Mobile View for mobile', () => {
    Reactors.platform = 'mobile';
    const view = shallow(
      <ReactorsView />
    );
    expect(view.find('ReactorsViewMobile')).toHaveLength(1);
  });

  // NODE

  test('it should return DOM View for node', () => {
    Reactors.platform = 'node';
    const view = shallow(
      <ReactorsView />
    );
    expect(view.find('ReactorsViewDOM')).toHaveLength(1);
  });

  // GENERAL

  test('it should have a measure', () => {
    const view = new ReactorsView({props: {}});
    expect(view.measure).toBeInstanceOf(Function);
  });
});
