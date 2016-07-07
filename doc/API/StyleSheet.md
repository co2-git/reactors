StyleSheet
===

`StyleSheet` unifies style conventions so you can pass it one style and it will be converted to its matching platform.

All `reactors` core components already unify style.

# Usage

```javascript
import {StyleSheet, StyleRule} from 'reactors';
```

# Stylesheet

```javascript
const styles = new StyleSheet({
  text: {
    color: 'grey',
  },
});

<View style={styles.text} />;
```

# Rule

```javascript
<View style={new StyleRule({color: 'grey'})} />;
```

# Border

In ReactNative, you don't need  to supply a borders style, unlike the web. `reactors` goes like ReactNative - you can omit style if it `solid`.

```javascript
new StyleRule({
  borderWidth: 2, // default color is black, default style is solid
});
```

# Flexbox

In ReactNative, you can omit `display: flex`. Likewise with `reactors`.

# Translate

```javascript
new StyleRule({
  transform: [{scale: 2}, {translateX: -250}],
});
```

# Transitions

Transitions will be ignored on mobile. Use animations instead.
