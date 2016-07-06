StyleSheet
===

As always in Reactors, we try to take the React Native design as reference.

```javascript
import React from 'react';
import {StyleSheet, Text} from 'reactors';

export default () => <Text style={styles.text}>Hello!</Text>;

const styles = StyleSheet.create({
  text: {
    color: 'grey',
  },
});
```

# Border

In ReactNative, you don't need  to supply a borders style, unlike the web. `reactors` goes like ReactNative - you can omit style if it `solid`.

```javascript
const styles = StyleSheet.create({
  container: {
    borderWidth: 2, // default color is black, default style is solid
  },
})
```

# Flexbox

In ReactNative, you can omit `display: flex`. Likewise with `reactors`.

# Translate

```javascript
const styles = StyleSheet.create({
  container: {
    transform: [{scale: 2}, {translateX: -250}],
  },
});
```
