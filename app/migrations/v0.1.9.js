import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import copy from '../lib/copy';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.9/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    await logger('UPGRADING TO v0.1.9');

    await logger('Updating desktop index.js');
    await copy(
      getTemplate('index.desktop.js'),
      getAppFile('index.desktop.js'),
    );

    await logger('Updating dom index.js');
    await copy(
      getTemplate('index.dom.js'),
      getAppFile('index.dom.js'),
    );

    await logger('Updating mobile index.js');
    await copy(
      getTemplate('index.mobile.js'),
      getAppFile('index.mobile.js'),
    );

    await logger('Updating web index.js');
    await copy(
      getTemplate('index.web.js'),
      getAppFile('index.web.js'),
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
