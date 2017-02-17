/* globals describe expect test */
import alignContent
  from '../../../../../app/API/StyleSheet/Properties/Property/alignContent';

describe('API / StyleSheet / Properties / alignContent', () => {
  test('it should be an object', () => {
    expect(alignContent).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(alignContent).toMatchObject({
      name: 'alignContent',
    });
  });

  test('it should have a mobile function', () => {
    expect(alignContent.mobile).toBeInstanceOf(Function);
  });

  test('it should return an empty object on mobile', () => {
    expect(alignContent.mobile()).toEqual({});
  });

  test('it should not have a desktop function', () => {
    expect(alignContent.desktop).toBeUndefined();
  });

  test('it should not have a web function', () => {
    expect(alignContent.web).toBeUndefined();
  });
});
