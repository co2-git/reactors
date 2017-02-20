/* globals global describe expect test */
import Reactors from '../../../app/API/Core';
import props from '../../../app/API/Core/props';

describe('API / Core / props', () => {
  test('it should be a function', () => {
    expect(props).toBeInstanceOf(Function);
  });

  test('it should return correct props', () => {
    expect(props({foo: 1})).toEqual({foo: 1});
  });

  test('it should transform styles', () => {
    Reactors.platform = 'mobile';
    const styles = props({
      style: {
        display: 'flex',
        flexDirection: 'row',
      },
    });
    expect(styles.style).toEqual({
      flexDirection: 'row',
    });
  });

  test('it should apply accessibility to mobile', () => {
    Reactors.platform = 'mobile';
    const aria = props({
      ['aria-labelledby']: 'hello',
    });
    expect(aria).toEqual({
      accessibilityLabel: 'hello',
    });
  });

  test('it should apply accessibility to web', () => {
    Reactors.platform = 'web';
    const aria = props({
      accessibilityLabel: 'hello',
    });
    expect(aria).toEqual({
      ['aria-labelledby']: 'hello',
    });
  });

  test('it should transform onPress gesture to onClick on web', () => {
    Reactors.platform = 'web';
    const onClick = props({
      onPress: 123,
    });
    expect(onClick).toEqual({
      ['onClick']: 123,
    });
  });
});
