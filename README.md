reactors

<img src="https://circleci.com/gh/co2-git/reactors.png?circle-token=4165dcefbcf62c4553fe9ce863fcd5ac93fa9a95" />
[![npm version](https://badge.fury.io/js/reactors.svg)](https://badge.fury.io/js/reactors)
[![GitHub version](https://badge.fury.io/gh/co2-git%2Freactors.png)](https://badge.fury.io/gh/co2-git%2Freactors)

===

Framework based on [React](https://facebook.github.io/react/) to build hybrid apps that run web, mobile and desktop.
We use [React Native](https://facebook.github.io/react-native/) for mobile, and [Electron](http://electron.atom.io/) for desktop.

# Install

```bash
sudo npm install --global react-native-cli electron-prebuilt reactors
```

# Create a new Reactors app

```bash
reactors init MyAwesomeApp
```

# Run

```bash
reactors run ios
reactors run android
reactors run web
reactors run desktop
```

# Usage

```javascript
import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
} from 'reactors';

export default class MyAwesomeComponent extends Component {
  render() {
    return (
      <View>
        <Text style={{fontWeight: 'bold'}}>One code to rule them all:</Text>
        <ListView
          dataSource={[
            'Web browser',
            'Android',
            'iPhone and iPad',
            'Mac OSX',
            'Ubuntu and Linux',
            'Windows 10',
          ]}
          renderRow={(platform) => <Text>{platform}</Text>}
          />
      </View>
    );
  }
}
```

View a detailed example [here](templates/app/App.js).

# Core Components

- [Core](doc/Components/Core.md)
- [Image](doc/Components/Image.md)
- [ListView](doc/Components/ListView.md)
- [Link](doc/Components/Link.md)
- [ScrollView](doc/Components/ScrollView.md)
- [Text](doc/Components/Text.md)
- [View](doc/Components/View.md)

# Core APIs

- [Gesture](doc/API/Gesture.md)
- [StyleSheet](doc/API/StyleSheet.md)

# Platform dependent code

You can code for a specific platform:

```javascript
switch (Reactors.platform) {
case 'mobile':
  // ...
  break;
case 'web':
  // ...
  break;
case 'desktop':
  // ...
  break;
}
```

You can access `react-native` and `electron` via `import`.

# Plugins

Check out Reactors plugin in the `npm` registry. Look for packages starting by `reactors-`.

Some plugins:

- [reactors-form](https://www.npmjs.com/package/reactors-form)
- [reactors-http-request](https://www.npmjs.com/package/reactors-http-request)
- [reactors-router](https://www.npmjs.com/package/reactors-router)
