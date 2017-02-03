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
    const desktopPath = 'desktop';
    return require(`./${desktopPath}`).default;
  }

  }
}

export default notifyByPlatform();
