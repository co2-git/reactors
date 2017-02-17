/* globals describe expect test */
import flexDirection
  from '../../../../../app/API/StyleSheet/Properties/Property/flexDirection';
import config from '../../../../../app/config';

describe('API / StyleSheet / Properties / flexDirection', () => {
  test('it should be an object', () => {
    expect(flexDirection).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(flexDirection).toMatchObject({
      name: 'flexDirection',
    });
  });

  test('it should not have a mobile function', () => {
    expect(flexDirection.mobile).toBeUndefined();
  });

  test('it should have a desktop function', () => {
    expect(flexDirection.desktop).toBeInstanceOf(Function);
  });

  test('it should return display if missing', () => {
    expect(flexDirection.desktop('row', [])).toMatchObject({
      flexDirection: 'row',
      display: 'flex',
    });
  });

  test('it should return only flex direction if display is not missing', () => {
    expect(
      flexDirection.desktop('column', [{property: 'display', value: 'flex'}])
    )
    .toMatchObject({
      flexDirection: 'column',
    });
  });

  test('it should have a web function', () => {
    expect(flexDirection.web).toBeInstanceOf(Function);
  });

  test('it should return display if missing', () => {
    expect(flexDirection.web('row', [])).toMatchObject({
      flexDirection: 'row',
      display: 'flex',
    });
  });

  test('it should return only flex direction if display is not missing', () => {
    expect(
      flexDirection.web('column', [{property: 'display', value: 'flex'}])
    )
    .toMatchObject({
      flexDirection: 'column',
    });
  });
});
