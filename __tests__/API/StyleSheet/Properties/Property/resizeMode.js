/* globals describe expect test */
import resizeMode from
'../../../../../app/API/StyleSheet/Properties/Property/resizeMode';

describe('API / StyleSheet / Properties / resizeMode', () => {
  test('it should be an object', () => {
    expect(resizeMode).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(resizeMode).toMatchObject({
      name: 'resizeMode',
    });
  });

  test('it should not have a mobile function', () => {
    expect(resizeMode.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(resizeMode.desktop).toBeInstanceOf(Function);
  });

  test('it should return object-fit cover', () => {
    expect(resizeMode.desktop('cover')).toEqual({
      objectFit: 'cover',
    });
  });

  test('it should return object-fit contain', () => {
    expect(resizeMode.desktop('contain')).toEqual({
      objectFit: 'contain',
    });
  });

  test('it should return object-fit fill', () => {
    expect(resizeMode.desktop('stretch')).toEqual({
      objectFit: 'fill',
    });
  });

  test('it should  have a desktop function', () => {
    expect(resizeMode.desktop).toBeInstanceOf(Function);
  });

  test('it should return object-fit cover', () => {
    expect(resizeMode.desktop('cover')).toEqual({
      objectFit: 'cover',
    });
  });

  test('it should return object-fit contain', () => {
    expect(resizeMode.desktop('contain')).toEqual({
      objectFit: 'contain',
    });
  });

  test('it should return object-fit fill', () => {
    expect(resizeMode.desktop('stretch')).toEqual({
      objectFit: 'fill',
    });
  });
});
