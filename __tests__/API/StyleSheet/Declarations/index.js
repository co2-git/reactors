/* globals describe expect test */
import Declarations from '../../../../app/API/StyleSheet/Declarations';
import Declaration from '../../../../app/API/StyleSheet/Declaration';

const rawDeclarations = new Declarations({
  width: 100,
  borderWidth: 2,
});

describe('API / StyleSheet / Declaratiosn', () => {
  test('it should be a function', () => {
    expect(Declarations).toBeInstanceOf(Function);
  });

  test('it should construct', () => {
    expect(rawDeclarations.declarations).toBeInstanceOf(Array);
    expect(rawDeclarations.declarations[0])
      .toBeInstanceOf(Declaration);
    expect(rawDeclarations.declarations[1])
      .toBeInstanceOf(Declaration);
  });
});
