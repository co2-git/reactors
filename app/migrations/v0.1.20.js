import 'babel-polyfill';
import path from 'path';
import logger from '../lib/logger';
import transform from '../lib/transform';
import read from '../lib/read';
import write from '../lib/write';
import getAppFile from '../lib/getAppFile';

function getTemplate(file) {
  return path.join(__dirname, `../../templates/migrations/v0.1.20/${file}`);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    const app = path.basename(process.cwd());

    await logger('UPGRADING TO v0.1.20');

    await logger('Creating README');
    await transform(
      getTemplate('README.md'),
      source => source.replace(/\{app\}/g, app),
      getAppFile('README.md'),
    );

    await logger('Add bundles to gitignore');
    const gitignore = await read(getAppFile('.gitignore'));
    await write(
      getAppFile('.gitignore'),
      `${gitignore}

# Reactors

/desktop/bundle.js
/web/bundle.js
`,
    );

    resolve();
  } catch (error) {
    reject(error);
  }
});
