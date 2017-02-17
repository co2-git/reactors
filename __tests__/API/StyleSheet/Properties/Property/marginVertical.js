/* globals describe expect test */
import marginVertical from
'../../../../../app/API/StyleSheet/Properties/Property/marginVertical';

describe('API / StyleSheet / Properties / marginVertical', () => {
  test('it should be an object', () => {
    expect(marginVertical).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(marginVertical).toMatchObject({
      name: 'marginVertical',
    });
  });

  test('it should not have a mobile function', () => {
    expect(marginVertical.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(marginVertical.desktop).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(marginVertical.desktop(10)).toEqual({
      marginTop: 10,
      marginBottom: 10,
    });
  });

  test('it should  have a web function', () => {
    expect(marginVertical.web).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(marginVertical.web(10)).toEqual({
      marginTop: 10,
      marginBottom: 10,
    });
  });
});
