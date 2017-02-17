/* globals describe expect test */
import paddingVertical from
'../../../../../app/API/StyleSheet/Properties/Property/paddingVertical';

describe('API / StyleSheet / Properties / paddingVertical', () => {
  test('it should be an object', () => {
    expect(paddingVertical).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(paddingVertical).toMatchObject({
      name: 'paddingVertical',
    });
  });

  test('it should not have a mobile function', () => {
    expect(paddingVertical.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(paddingVertical.desktop).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(paddingVertical.desktop(10)).toEqual({
      paddingTop: 10,
      paddingBottom: 10,
    });
  });

  test('it should  have a web function', () => {
    expect(paddingVertical.web).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(paddingVertical.web(10)).toEqual({
      paddingTop: 10,
      paddingBottom: 10,
    });
  });
});
