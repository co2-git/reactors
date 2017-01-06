StyleSheet
===

`StyleSheet` unifies style conventions so you can pass it one style and it will be converted to its matching platform.

All `reactors` core components already unify style.

# Stylesheet

```javascript
import {StyleSheet} from 'reactors';

const styles = new StyleSheet({
  text: {
    color: 'blue',
  },
});

<View style={styles.text} />;
```

# Rule

```javascript
<View style={{color: 'blue'}} />
```

You can pass arrays of style:

```javascript
<View style={[style1, style2, this.foo && style3]} />
```
