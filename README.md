reactor
===

Framework based on React and React Native to build hybrid apps for both mobile and the web.

# Install

```bash
sudo npm install --global react-native-cli co2-git/reactor
```

# Create a new Reactor app

```bash
reactor init MyAwesomeApp
```

# Run for mobile

```bash
react-native run-ios
react-native run-android
```

# Run for web

Just open `index.html` in your favorite browser.

# Usage

```javascript
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'reactor';

export default class MyAwesomeComponent extends Component {
  render() {
    return (
      <View>
        <Text>Hey! This works on web, android and ios!</Text>
      </View>
    );
  }
}
```

# Components

- [View](doc/View.md)
