Link
===

Display a link of a resource openable in device's browser.

# Usage

```javascript
import React, {Component} from 'react';
import {Link} from 'reactors';

export default class MyComponent extends Component {
  render() {
    return (
      <Link href="http://google.com">
        <Text>Go to Google</Text>
      </Link>
    );
  }
}
```
