/* globals describe expect test */
import borderBottomStyle from
'../../../../../app/API/StyleSheet/Properties/Property/borderBottomStyle';

describe('API / StyleSheet / Properties / borderBottomStyle', () => {
  test('it should be an object', () => {
    expect(borderBottomStyle).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(borderBottomStyle).toMatchObject({
      name: 'borderBottomStyle',
    });
  });

  test('it should have a mobile function', () => {
    expect(borderBottomStyle.mobile).toBeInstanceOf(Function);
  });

  test('it should return an empty object on mobile', () => {
    expect(borderBottomStyle.mobile()).toEqual({});
  });

  test('it should not have a desktop function', () => {
    expect(borderBottomStyle.desktop).toBeUndefined();
  });

  test('it should not have a web function', () => {
    expect(borderBottomStyle.web).toBeUndefined();
  });
});
