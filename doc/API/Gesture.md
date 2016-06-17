The Gesture API
===

The Gesture API exposes several gesture utilities via traits.

```javascript
<View onPress={(event) => console.log({tapped: event})} />
```

# `onPress: Function`

The `onPress` prop is present in some Reactors' core components:

- View
- ScrollView
- Link
- Text
- Image

If you are creating your own component, this is how to integrate `onPress`:

```javascript
import React, {Component} from 'react';
import Reactors, {Gesture} from 'reactors';

class MyComponent extends Component {
  render() {
    const handlers = Gesture.handlers({
      onPress: (event) => console.log('pressed', event),
    });
    return (
      <SomeComponent {...handlers} />
    );
  }
}
```
