/* globals describe expect test */
import Declaration from '../../../../app/API/StyleSheet/Declaration';
import should from 'should';
import config from '../../../../app/config';

const widthDeclaration = new Declaration(
  'width',
  100,
  'web',
);

const alignContentDeclaration = new Declaration(
  'alignContent',
  'center',
  'mobile',
);

const borderWidthDeclaration = new Declaration(
  'borderWidth',
  1,
  'web',
);

describe('API / StyleSheet / Declaration', () => {
  test('it should be a function', () => {
    expect(Declaration).toBeInstanceOf(Function);
  });

  test('it should construct a simple declaration', () => {
    expect(widthDeclaration).toMatchObject({
      platform: 'web',
      property: 'width',
      value: 100,
      style: undefined,
    });
  });

  test('it should objectify a simple declaration', () => {
    expect(widthDeclaration.toObject()).toMatchObject({
      width: 100,
    });
  });

  test('it should construct a stripped declaration', () => {
    expect(alignContentDeclaration).toMatchObject({
      platform: 'mobile',
      property: 'alignContent',
      value: 'center',
    });
    should(alignContentDeclaration).have.property('style')
      .which.is.an.Object();
    expect(alignContentDeclaration.style.name)
      .toEqual('alignContent');
    expect(alignContentDeclaration.style.mobile)
      .toBeInstanceOf(Function);
  });

  test('it should objectify a stripped declaration', () => {
    expect(alignContentDeclaration.toObject()).toMatchObject({});
  });

  test('it should construct a joined declaration', () => {
    expect(borderWidthDeclaration).toMatchObject({
      platform: 'web',
      property: 'borderWidth',
      value: 1,
    });
    should(borderWidthDeclaration).have.property('style')
      .which.is.an.Object();
    expect(borderWidthDeclaration.style.name)
      .toEqual('borderWidth');
    expect(borderWidthDeclaration.style.desktop)
      .toBeInstanceOf(Function);
    expect(borderWidthDeclaration.style.web)
      .toBeInstanceOf(Function);
  });

  test('it should objectify a joined declaration', () => {
    expect(borderWidthDeclaration.toObject()).toMatchObject({
      borderWidth: 1,
      borderStyle: config.DEFAULT_BORDER_STYLE,
      borderColor: config.DEFAULT_BORDER_COLOR,
    });
  });
});
