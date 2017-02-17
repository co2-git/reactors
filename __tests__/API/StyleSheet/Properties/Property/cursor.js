/* globals describe expect test */
import cursor
  from '../../../../../app/API/StyleSheet/Properties/Property/cursor';

describe('API / StyleSheet / Properties / cursor', () => {
  test('it should be an object', () => {
    expect(cursor).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(cursor).toMatchObject({
      name: 'cursor',
    });
  });

  test('it should have a mobile function', () => {
    expect(cursor.mobile).toBeInstanceOf(Function);
  });

  test('it should return an empty object on mobile', () => {
    expect(cursor.mobile()).toEqual({});
  });

  test('it should not have a desktop function', () => {
    expect(cursor.desktop).toBeUndefined();
  });

  test('it should not have a web function', () => {
    expect(cursor.web).toBeUndefined();
  });
});
