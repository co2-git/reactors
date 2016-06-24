import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import copy from '../lib/copy';
import changeJSON from '../lib/changeJSON';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.4/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    await logger('UPGRADING TO v0.1.4');

    await logger('Updating web pack config');
    await copy(
      getTemplate('webpack.config.js'),
      getAppFile('webpack.config.js'),
    );

    await logger('Updating desktop index.html');
    await copy(
      getTemplate('index.desktop.html'),
      getAppFile('desktop/index.html'),
    );

    await logger('Updating desktop index.js');
    await copy(
      getTemplate('index.desktop.js'),
      getAppFile('index.desktop.js'),
    );

    await logger('Updating electron index.js');
    await copy(
      getTemplate('index.electron.js'),
      getAppFile('index.electron.js'),
    );

    await logger('Updating dom index.js');
    await copy(
      getTemplate('index.dom.js'),
      getAppFile('index.dom.js'),
    );

    await logger('Updating web index.html');
    await copy(
      getTemplate('index.html'),
      getAppFile('index.html'),
    );

    await logger('Change main in package.json for electron');
    await changeJSON(
      getAppFile('package.json'),
      json => {
        json.main = 'index.electron.js';
      }
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
