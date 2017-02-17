/* globals global describe expect test */
import Accessibility from '../../../app/API/Accessibility';

describe('API / Accessibility', () => {
  test('it should be a function', () => {
    expect(Accessibility).toBeInstanceOf(Function);
  });

  test(
    'it should transform aria-labelledby to accessibilityLabel in mobile',
    () => {
      expect(
        Accessibility.transform(
          {['aria-labelledby']: 'hello'},
          'mobile'
        )
      )
      .toMatchObject({
        added: [{accessibilityLabel: 'hello'}],
        removed: ['aria-labelledby'],
      });
    },
  );
});
