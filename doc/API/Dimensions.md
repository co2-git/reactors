Dimensions
===

Get window's dimensions.

```javascript
import {Dimensions} from 'reactors';

const {width, height} = Dimensions.get('window');
```

# Resize

For DOM-based platform, you can listen on resize events:

`Dimensions.onResize((width, height) => {});`
