import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import transform from '../lib/transform';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.16/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    const app = path.basename(process.cwd());

    await logger('UPGRADING TO v0.1.16');

    await logger('Updating ios index.js');
    await transform(
      getTemplate('index.mobile.js'),
      source => source.replace(/\{app\}/g, app),
      getAppFile('index.ios.js'),
    );

    await logger('Updating android index.js');
    await transform(
      getTemplate('index.mobile.js'),
      source => source.replace(/\{app\}/g, app),
      getAppFile('index.android.js'),
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
