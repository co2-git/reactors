import 'babel-polyfill';
import exec from '../lib/exec';
import transform from '../lib/transform';
import changeJSON from '../lib/changeJSON';
import npmInstall from '../lib/npmInstall';
import write from '../lib/write';
import copy from '../lib/copy';
import logger from '../lib/logger';
import getLocalFile from '../lib/getLocalFile';
import _getAppFile from '../lib/getAppFile';
import pkg from '../../package.json';

export default function init(app: string): Promise {
  function transformer(source: string): string {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file: string): string {
    return _getAppFile(file, app);
  }

  return new Promise(async (resolve, reject) => {
    try {
      await logger('Installing React Native');
      await exec(`react-native init ${app}`);
      await logger.ok('React Native installed');

      await logger('Update mobile indexes');
      await transform(
        getLocalFile('templates/index.mobile.js'),
        transformer,
        getAppFile('index.ios.js'),
      );
      await transform(
        getLocalFile('templates/index.mobile.js'),
        transformer,
        getAppFile('index.android.js'),
      );

      await logger('Create html for the web');
      await transform(
        getLocalFile('templates/index.html'),
        transformer,
        getAppFile('index.html'),
      );

      await logger('Create JS for the web');
      await transform(
        getLocalFile('templates/index.web.js'),
        transformer,
        getAppFile('index.web.js'),
      );

      await logger('Create app directory');
      await exec(`mkdir ${app}/app/`);

      await logger('Create App');
      await transform(
        getLocalFile('templates/app/App.js'),
        transformer,
        getAppFile('app/App.js'),
      );

      await logger('Create webpack config file for web/desktop');
      await transform(
        getLocalFile('templates/webpack.config.js'),
        transformer,
        getAppFile('webpack.config.js'),
      );

      await logger('Create desktop directory');
      await exec(`mkdir ${app}/desktop/`);

      await logger('Create html for desktop');

      await transform(
        getLocalFile('templates/index.desktop.html'),
        transformer,
        getAppFile('desktop/index.html'),
      );

      await logger('Create JS for desktop');
      await copy(
        getLocalFile('templates/index.desktop.js'),
        getAppFile('index.desktop.js'),
      );

      await logger('Create DOM html');
      await copy(
        getLocalFile('templates/index.dom.html'),
        getAppFile('index.dom.html'),
      );

      await logger('Create electron index');
      await copy(
        getLocalFile('templates/index.electron.js'),
        getAppFile('index.electron.js'),
      );

      await logger('Installing npm dependencies');
      await npmInstall(app,
        'reactors',
        'react-dom',
        'babel-loader',
        'webpack',
        'babel-preset-react',
        'babel-preset-es2015',
        'babel-preset-stage-0',
        'ignore-loader',
      );

      await logger('Updating package.json');
      await changeJSON(
        getAppFile('package.json'),
        (json) => {
          json.main = 'index.desktop.js';
        },
      );

      await logger('create reactors.json');
      await write(
        getAppFile('reactors.json'),
        JSON.stringify({version: pkg.version}),
      );

      await logger.ok(`Reactors app ${app} successfully created`);
    } catch (error) {
      reject(error);
    }
  });
}
