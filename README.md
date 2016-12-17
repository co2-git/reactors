reactors
===

<img src="https://circleci.com/gh/co2-git/reactors.svg?style=shield&circle-token=4165dcefbcf62c4553fe9ce863fcd5ac93fa9a95" />
[![npm version](https://badge.fury.io/js/reactors.svg)](https://badge.fury.io/js/reactors)
[![GitHub version](https://badge.fury.io/gh/co2-git%2Freactors.png)](https://badge.fury.io/gh/co2-git%2Freactors)

===

Framework based on [React](https://facebook.github.io/react/) to build cross-platform apps that run web, mobile and desktop.

**To create and run reactors apps, see [reactors-cli](https://github.com/co2-git/reactors-cli)**

# Install

```bash
npm install reactors
```

# Usage

```javascript
import React from 'react';
import {
  ListView,
  Text,
  View,
} from 'reactors';

export default function MyAwesomeComponent() {
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>One code to rule them all:</Text>
      <ListView
        dataSource={[
          'Android',
          'iPhone and iPad',
          'Mac OSX',
          'Ubuntu and Linux',
          'Web browser',
          'Windows 10',
        ]}
        renderRow={(platform) => <Text>{platform}</Text>}
        />
    </View>
  );
}
```

View a detailed example [here](https://github.com/co2-git/reactors-cli/blob/master/templates/app/App.js).

# Core Components

- [Image](doc/Components/Image.md)
- [ListView](doc/Components/ListView.md)
- [Link](doc/Components/Link.md)
- [ScrollView](doc/Components/ScrollView.md)
- [Text](doc/Components/Text.md)
- [View](doc/Components/View.md)

# Core APIs

- [Core](doc/API/Core.md)
- [Dimensions](doc/API/Dimensions.md)
- [Gesture](doc/API/Gesture.md)
- [Notifications](doc/Components/Notifications.md)
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

# Plugins

Check out Reactors plugin in the `npm` registry. Look for packages starting by `reactors-`.

Some plugins:

- [reactors-form](https://www.npmjs.com/package/reactors-form)
- [reactors-grid](https://www.npmjs.com/package/reactors-grid)
- [reactors-http-request](https://www.npmjs.com/package/reactors-http-request)
- [reactors-router](https://www.npmjs.com/package/reactors-router)
