/* globals describe expect test */
import React from 'react';
import {shallow} from 'enzyme';
import ReactorsViewDOM from '../../../app/Component/View/DOM';

describe('Component / View / Desktop', () => {
  test('it should return a section', () => {
    const view = shallow(
      <ReactorsViewDOM reactorsPlatform="desktop" />
    );
    expect(view.find('section')).toHaveLength(1);
  });
});
