/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsViewDOM from '../../../app/Component/View/DOM';
import Reactors from '../../../app/API/Core';

describe('Component / View / Web', () => {
  test('it should return a section', () => {
    Reactors.platform = 'web';
    const view = shallow(
      <ReactorsViewDOM />
    );
    expect(view.find('section')).toHaveLength(1);
  });
});
