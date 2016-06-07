reactors
===

Framework based on React and React Native to build hybrid apps for both mobile and the web.

# Install

```bash
sudo npm install --global react-native-cli reactors
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
```

# Usage

```javascript
import React, {Component} from 'react';
import {
  View,
  Text,
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

Read more in our [documentation](docs/index.md).
