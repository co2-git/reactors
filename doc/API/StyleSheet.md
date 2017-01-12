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

<View style={new StyleSheet.Rule({color: 'blue'})} />
```

You can pass arrays of style:

```javascript
<View style={[
  {width: 1},
  hasHeight && {height: 1},
  ]} />

type $rule = {};

class Rule {

}

type $styles = {
  [selector: string]: $rule | $rule[],
};

class StyleSheet {
  static Rule = Rule;

  constructor(styles: $styles) {
    for (const selector in styles) {
      const _style = styles[selector];
      const rules = isArray(_style) ? _style : [_style];

      Object.assign(this, {
        [selector]: map(
          rule, (style) => style instanceOf Rule ?
            style : new Rule(style),
        ),
      });
    }
  }
}

type $StyleSheet = {[selector: string]: StyleSheet.Rule[]}

const style = new StyleSheet({
  container: [new StyleSheet.Rule()],
});
```
