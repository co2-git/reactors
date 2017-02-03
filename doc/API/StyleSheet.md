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

# Mixins

```javascript
import {StyleSheet} from 'reactors';

const {
  Style,
  color,
  font,
  line,
} = StyleSheet;

const styles = new StyleSheet({
  container: {
    ...new Style.Dimensions(300, 150),
    ...new Style.Border(2, color('red'), line('solid')),
    ...new Style.Margin(10),
  },
  text: {
    ...new Style.Font(14, font('trebuchet'), color('orange')),
    ...new Style.Margin(10, 20),
  },
});
```
