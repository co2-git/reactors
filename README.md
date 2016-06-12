reactors
===

Framework based on React to build hybrid apps that run web, mobile and desktop.
We use React Native for mobile, and Electron for desktop.

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

# Core Components

- Image
- ListView
- Link
- ScrollView
- Text
- View

# Core APIs

- StyleSheet

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
