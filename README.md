reactors
===

Framework based on React and React Native to build hybrid apps for both mobile and the web.

# Install

```bash
sudo npm install --global react-native-cli co2-git/reactors
```

# Create a new Reactors app

```bash
reactors init MyAwesomeApp
```

# Run

```bash
reactor run ios
reactor run android
reactor run web
```

# Usage

```javascript
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'reactors';

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

# Features

- [Components](doc/Components.md)
