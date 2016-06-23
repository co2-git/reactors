import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import copy from '../lib/copy';
import changeJSON from '../lib/changeJSON';
import getAppFile from '../lib/getAppFile';

export default () => new Promise(async (resolve, reject) => {
  try {
    await logger('Updating web pack config');
    await copy(
      path.join(__dirname, '/v0.1.4/webpack.config.js'),
      getAppFile('webpack.config.js'),
    );

    await logger('Updating desktop index.html');
    await copy(
      path.join(__dirname, '/v0.1.4/index.desktop.html'),
      getAppFile('desktop/index.html'),
    );

    await logger('Updating desktop index.js');
    await copy(
      path.join(__dirname, '/v0.1.4/index.desktop.js'),
      getAppFile('index.desktop.js'),
    );

    await logger('Updating electron index.js');
    await copy(
      path.join(__dirname, '/v0.1.4/index.electron.js'),
      getAppFile('index.electron.js'),
    );

    await logger('Updating dom index.js');
    await copy(
      path.join(__dirname, '/v0.1.4/index.dom.js'),
      path.join(__dirname, '/v0.1.4/index.dom.js'),
    );

    await logger('Updating web index.html');
    await copy(
      path.join(__dirname, '/v0.1.4/index.html'),
      getAppFile('index.html'),
    );

    await logger('Change main in package.json for electron');
    await changeJSON(
      getAppFile('package.json'),
      json => {
        json.main = 'index.electron.js';
      }
    );
  } catch (error) {
    reject(error);
  }
});
