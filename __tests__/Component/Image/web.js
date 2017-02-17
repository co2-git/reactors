/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsImageDOM from '../../../app/Component/Image/DOM';

describe('Component / Image / Web', () => {
  test('it should return a section', () => {
    const view = shallow(
      <ReactorsImageDOM reactorsPlatform="web" />
    );
    expect(view.find('img')).toHaveLength(1);
  });
});
