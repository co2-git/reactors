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

# Plugins

Check out Reactors plugin in the `npm` registry. Look for packages starting by `reactors-`.
