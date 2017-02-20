/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsImageDOM from '../../../app/Component/Image/DOM';
import Reactors from '../../../app/API/Core';

describe('Component / Image / Web', () => {
  test('it should return a section', () => {
    Reactors.platform = 'web';
    const view = shallow(
      <ReactorsImageDOM />
    );
    expect(view.find('img')).toHaveLength(1);
  });
});
