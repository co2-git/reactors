/* globals global describe expect test */
import Reactors from '../../../app/API/Core';
import Accessibility from '../../../app/API/Accessibility';

describe('API / Accessibility', () => {
  test('it should be a function', () => {
    expect(Accessibility).toBeInstanceOf(Function);
  });

  test(
    'it should transform aria-labelledby to accessibilityLabel in mobile',
    () => {
      Reactors.platform = 'mobile';
      expect(
        Accessibility.transform(
          {['aria-labelledby']: 'hello'},
        )
      )
      .toMatchObject({
        added: [{accessibilityLabel: 'hello'}],
        removed: ['aria-labelledby'],
      });
    },
  );

  test(
    'it should transform accessibilityLabel to aria-labelledby in web',
    () => {
      Reactors.platform = 'web';
      expect(
        Accessibility.transform(
          {['accessibilityLabel']: 'hello'},
        )
      )
      .toMatchObject({
        added: [{['aria-labelledby']: 'hello'}],
        removed: ['accessibilityLabel'],
      });
    },
  );
});
