/* globals global describe expect test */
import props from '../../../app/API/Core/props';

describe('API / Core / props', () => {
  test('it should be a function', () => {
    expect(props).toBeInstanceOf(Function);
  });

  test('it should return correct props', () => {
    expect(props({foo: 1})).toEqual({foo: 1});
  });

  test('it should remove reactorsPlatform', () => {
    expect(props({reactorsPlatform: 'web'})).toEqual({});
  });
});
