import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import transform from '../lib/transform';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.18/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    const app = path.basename(process.cwd());

    await logger('UPGRADING TO v0.1.18');

    await logger('Updating desktop index.js');
    await transform(
      getTemplate('index.desktop.js'),
      source => source.replace(/\{app\}/g, app),
      getAppFile('index.desktop.js'),
    );

    await logger('Updating web index.js');
    await transform(
      getTemplate('index.web.js'),
      source => source.replace(/\{app\}/g, app),
      getAppFile('index.web.js'),
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
