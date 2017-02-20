/* globals global describe expect test */
import Reactors from '../../../app/API/Core';
import Gesture from '../../../app/API/Gesture';

function onPress() {
  return;
}

describe('API / Gesture', () => {
  test(
    'it should transform onPress on web',
    () => {
      Reactors.platform = 'web';
      expect(
        Gesture.transform({onPress})
      )
      .toMatchObject({
        added: [{onClick: onPress}],
        removed: ['onPress'],
      });
    },
  );
});
