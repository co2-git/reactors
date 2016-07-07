import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import copy from '../lib/copy';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.11/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    await logger('UPGRADING TO v0.1.11');

    await logger('Updating ios index.js');
    await copy(
      getTemplate('index.mobile.js'),
      getAppFile('index.ios.js'),
    );

    await logger('Updating android index.js');
    await copy(
      getTemplate('index.mobile.js'),
      getAppFile('index.android.js'),
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
