/**
  * @module reactors
  * @flow
**/

import React, {Component} from 'react';
import omit from 'lodash/omit';

export default class ReactorsViewWeb extends Component {
  render() {
    const webProps = omit(
      this.props,
      [
        'hitSlop',
        'keyboardShouldPersistTaps',
        'onAccessibilityTap',
        'onLayout',
        'onMagicTap',
        'onMoveShouldSetResponder',
        'onMoveShouldSetResponderCapture',
        'onResponderGrant',
        'onResponderMove',
        'onResponderReject',
        'onResponderRelease',
        'onResponderTerminate',
        'onResponderTerminationRequest',
        'onStartShouldSetResponder',
        'onStartShouldSetResponderCapture',
        'pointerEvents',
        'removeClippedSubviews',
        'testID',
      ]
    );
    return (
      /* $FlowFixMe This is by design */
      <section {...webProps}>
        {this.props.children}
      </section>
    );
  }
}
