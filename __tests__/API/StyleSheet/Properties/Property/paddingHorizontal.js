/* globals describe expect test */
import paddingHorizontal from
'../../../../../app/API/StyleSheet/Properties/Property/paddingHorizontal';

describe('API / StyleSheet / Properties / paddingHorizontal', () => {
  test('it should be an object', () => {
    expect(paddingHorizontal).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(paddingHorizontal).toMatchObject({
      name: 'paddingHorizontal',
    });
  });

  test('it should not have a mobile function', () => {
    expect(paddingHorizontal.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(paddingHorizontal.desktop).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(paddingHorizontal.desktop(10)).toEqual({
      paddingLeft: 10,
      paddingRight: 10,
    });
  });

  test('it should  have a web function', () => {
    expect(paddingHorizontal.web).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(paddingHorizontal.web(10)).toEqual({
      paddingLeft: 10,
      paddingRight: 10,
    });
  });
});
