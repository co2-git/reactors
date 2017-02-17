/* globals global describe expect test */
import guessPlatform from '../../../app/API/Core/guessPlatform';

describe('API / Core / guessPlatform', () => {
  test('it should be a function', () => {
    expect(guessPlatform).toBeInstanceOf(Function);
  });

  test('it should be node', () => {
    expect(guessPlatform()).toEqual('node');
  });
});
