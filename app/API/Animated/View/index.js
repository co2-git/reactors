import Reactors from '../../Core';

const ReactorsAnimated = require(
  Reactors.platform === 'mobile' ? './mobile' : './dom'
).default;

export default ReactorsAnimated;
