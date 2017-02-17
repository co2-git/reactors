/* globals describe expect test */
import transform from
'../../../../../app/API/StyleSheet/Properties/Property/transform';

describe('API / StyleSheet / Properties / transform', () => {
  test('it should be an object', () => {
    expect(transform).toBeInstanceOf(Object);
  });

  test('it should have the right name', () => {
    expect(transform).toMatchObject({
      name: 'transform',
    });
  });

  test('it should not have a mobile function', () => {
    expect(transform.mobile).toBeUndefined();
  });

  test('it should  have a desktop function', () => {
    expect(transform.desktop).toBeInstanceOf(Function);
  });

  test('it should return string to translate', () => {
    expect(transform.desktop([{translate: 100}])).toEqual({
      transform: 'translate(100)',
    });
  });

  test('it should return string to translateX', () => {
    expect(transform.desktop([{translateX: 100}])).toEqual({
      transform: 'translateX(100)',
    });
  });

  test('it should return string to translateY', () => {
    expect(transform.desktop([{translateY: 100}])).toEqual({
      transform: 'translateY(100)',
    });
  });

  test('it should return string to scale', () => {
    expect(transform.desktop([{scale: 100}])).toEqual({
      transform: 'scale(100)',
    });
  });

  test('it should return string to scaleX', () => {
    expect(transform.desktop([{scaleX: 100}])).toEqual({
      transform: 'scaleX(100)',
    });
  });

  test('it should return string to scaleY', () => {
    expect(transform.desktop([{scaleY: 100}])).toEqual({
      transform: 'scaleY(100)',
    });
  });

  test('it should return string to rotate', () => {
    expect(transform.desktop([{rotate: '0.5turn'}])).toEqual({
      transform: 'rotate(0.5turn)',
    });
  });

  test('it should return string to skew', () => {
    expect(transform.desktop([{skew: '30deg, 20deg'}])).toEqual({
      transform: 'skew(30deg, 20deg)',
    });
  });

  test('it should return string to skewX', () => {
    expect(transform.desktop([{skewX: '30deg'}])).toEqual({
      transform: 'skewX(30deg)',
    });
  });

  test('it should return string to skewY', () => {
    expect(transform.desktop([{skewY: '30deg'}])).toEqual({
      transform: 'skewY(30deg)',
    });
  });
});
