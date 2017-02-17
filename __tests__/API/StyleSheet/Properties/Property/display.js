/* globals describe expect test */
import display
  from '../../../../../app/API/StyleSheet/Properties/Property/display';

describe('API / StyleSheet / Properties / display', () => {
  test('it should be an object', () => {
    expect(display).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(display).toMatchObject({
      name: 'display',
    });
  });

  test('it should have a mobile function', () => {
    expect(display.mobile).toBeInstanceOf(Function);
  });

  test('it should return an empty object on mobile', () => {
    expect(display.mobile()).toEqual({});
  });

  test('it should not have a desktop function', () => {
    expect(display.desktop).toBeUndefined();
  });

  test('it should not have a web function', () => {
    expect(display.web).toBeUndefined();
  });
});
