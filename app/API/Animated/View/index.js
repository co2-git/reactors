import Reactors from '../../Core';

let ReactorsAnimated;

if (Reactors.platform === 'mobile') {
  ReactorsAnimated = require('./mobile').default;
} else {
  ReactorsAnimated = require('./dom').default;
}

export default ReactorsAnimated;
