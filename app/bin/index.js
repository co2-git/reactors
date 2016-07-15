#! /usr/bin/env node

import 'babel-polyfill';
import os from 'os';
import init from '../lib/init';
import exec from '../lib/exec';
import bundle from '../lib/bundle';
import upgrade from '../lib/upgrade';

const [, , cmd, app] = process.argv;

function _upgrade() {
  return new Promise(async (resolve, reject) => {
    try {
      console.log('Updating npm dependencies');
      await exec('npm install');

      console.log('Upgrading react-native');
      await exec('react-native upgrade');

      console.log('Upgrading reactors');
      await upgrade();

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

switch (cmd) {
case 'init':
  console.log();
  console.log('Creating Reactors app', app);
  console.log();

  init(app)
    .then(() => console.log('Your app is ready to be awesome'))
    .catch(error => console.log(error.stack));
  break;
case 'run': {
  const platform = app;
  switch (platform) {
  case 'android':
  case 'ios':
    exec(`react-native run-${platform}`);
    break;
  case 'web':
  case 'desktop':
    bundle(platform);

    setTimeout(() => {
      if (platform === 'web') {
        switch (os.platform()) {
        case 'darwin':
          exec('open index.html');
          break;
        case 'linux':
          exec('x-www-browser index.html');
          break;
        default:
          throw new Error('Platform not supported: ' + os.platform());
        }
      } else if (platform === 'desktop') {
        exec('electron index.electron.js');
      }
    }, 5000);
    break;
  default:
    throw new Error('Unknown platform: ' + platform);
  }
  break;
}
case 'upgrade':
  _upgrade()
    .then(() => {
      console.log('Your app has been upgraded');
    })
    .catch(error => {
      console.log(error.stack);
      process.exit(8);
    });
  break;
default:
  console.log('Init a new app: `reactors init <AppName>`');
  console.log('Run app: `reactors run <platform>`');
}
