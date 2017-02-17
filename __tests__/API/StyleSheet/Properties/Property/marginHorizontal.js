/* globals describe expect test */
import marginHorizontal from
'../../../../../app/API/StyleSheet/Properties/Property/marginHorizontal';

describe('API / StyleSheet / Properties / marginHorizontal', () => {
  test('it should be an object', () => {
    expect(marginHorizontal).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(marginHorizontal).toMatchObject({
      name: 'marginHorizontal',
    });
  });

  test('it should not have a mobile function', () => {
    expect(marginHorizontal.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(marginHorizontal.desktop).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(marginHorizontal.desktop(10)).toEqual({
      marginLeft: 10,
      marginRight: 10,
    });
  });

  test('it should  have a web function', () => {
    expect(marginHorizontal.web).toBeInstanceOf(Function);
  });

  test('it should return the right values', () => {
    expect(marginHorizontal.web(10)).toEqual({
      marginLeft: 10,
      marginRight: 10,
    });
  });
});
