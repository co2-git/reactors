/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsViewDOM from '../../../app/Component/View/DOM';
import Reactors from '../../../app/API/Core';

describe('Component / View / Desktop', () => {
  test('it should return a section', () => {
    Reactors.platform = 'desktop';
    const view = shallow(
      <ReactorsViewDOM reactorsPlatform="desktop" />
    );
    expect(view.find('section')).toHaveLength(1);
  });
});
