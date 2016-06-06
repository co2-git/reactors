/**
  * @module {app}
  * @name Index for mobile platforms (iOS & Android)
  * @type RN Index
  * @description React Native index
  * @flow
**/

import {AppRegistry} from 'react-native';
import App from './app/App';
import Reactors from 'reactors';

Reactors.platform = 'mobile';

AppRegistry.registerComponent('{app}', () => App);
