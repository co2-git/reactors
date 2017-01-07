import Reactors from 'reactors';

function notifyByPlatform() {
  switch (Reactors.platform) {

  default: {
    throw new Error(`Unknown platform ${Reactors.platform}`);
  }

  case 'web':
  case 'mobile': {
    return {
      push() {
        console.info('Web and mobile support coming soon');
      },
    };
  }

  case 'desktop': {
    return require('./desktop').default;
  }

  }
}

export default notifyByPlatform();
