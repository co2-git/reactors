/* globals describe expect test */
import borderWidth
  from '../../../../../app/API/StyleSheet/Properties/Property/borderWidth';
import config from '../../../../../app/config';

const missingStyle = [
  {property: 'borderColor', value: 'red'},
];

const missingColor = [
  {property: 'borderStyle', value: 'none'},
];

describe('API / StyleSheet / Properties / borderWidth', () => {
  test('it should be an object', () => {
    expect(borderWidth).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(borderWidth).toMatchObject({
      name: 'borderWidth',
    });
  });

  test('it should not have a mobile function', () => {
    expect(borderWidth.mobile).toBeUndefined();
  });

  test('it should have a desktop function', () => {
    expect(borderWidth.desktop).toBeInstanceOf(Function);
  });

  test('it should return style and color if missing', () => {
    expect(borderWidth.desktop(10, {})).toMatchObject({
      borderWidth: 10,
      borderColor: config.DEFAULT_BORDER_COLOR,
      borderStyle: config.DEFAULT_BORDER_STYLE,
    });
  });

  test('it should return style if missing', () => {
    expect(borderWidth.desktop(10, missingStyle)).toMatchObject({
      borderWidth: 10,
      borderStyle: config.DEFAULT_BORDER_STYLE,
    });
  });

  test('it should return color if missing', () => {
    expect(borderWidth.desktop(10, missingColor)).toMatchObject({
      borderWidth: 10,
      borderColor: config.DEFAULT_BORDER_COLOR,
    });
  });

  test('it should return only width if color and style are not missing', () => {
    expect(borderWidth.desktop(10, [...missingStyle, ...missingColor]))
    .toMatchObject({
      borderWidth: 10,
    });
  });

  test('it should have a web function', () => {
    expect(borderWidth.web).toBeInstanceOf(Function);
  });

  test('it should return style and color if missing', () => {
    expect(borderWidth.web(10, {})).toMatchObject({
      borderWidth: 10,
      borderColor: config.DEFAULT_BORDER_COLOR,
      borderStyle: config.DEFAULT_BORDER_STYLE,
    });
  });

  test('it should return style if missing', () => {
    expect(borderWidth.web(10, missingStyle)).toMatchObject({
      borderWidth: 10,
      borderStyle: config.DEFAULT_BORDER_STYLE,
    });
  });

  test('it should return color if missing', () => {
    expect(borderWidth.web(10, missingColor)).toMatchObject({
      borderWidth: 10,
      borderColor: config.DEFAULT_BORDER_COLOR,
    });
  });

  test('it should return only width if color and style are not missing', () => {
    expect(borderWidth.web(10, [...missingStyle, ...missingColor]))
    .toMatchObject({
      borderWidth: 10,
    });
  });
});
