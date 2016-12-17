The Gesture API
===

The Gesture API exposes several gesture utilities.

# Gestures

- `press` a mouse press or a finger tap
- `enter` button enter (or any return button from keyboard) pressed

# Usage

```javascript
import React from 'react';
import Reactors, {Gesture} from 'reactors';

function MyComponent(props) {
  return <Foo
    {...Gesture.handlers({
      onPress: (event) => {
        // ...
      }
    })} />
}
```

Calling handlers with props will return these props with the handlers and remove the gestures.

For example, calling `Gesture.handlers({onPress: () => {}, type: 'submit'})` on a web button will return:

```javascript
{
  onClick: () => {},
  type: 'submit',
}
```

Here, `onPress` has been substituted for `onClick` and the other keys are returned as such.
