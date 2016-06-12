import path from 'path';
import sequencer from 'promise-sequencer';
import exec from '../lib/exec';
import transform from '../lib/transform';
import changeJSON from '../lib/changeJSON';
import npmInstall from '../lib/npmInstall';
import copy from '../lib/copy';
import colors from 'colors';

function getLocalFile(file) {
  return path.resolve(__dirname, '../../', file);
}

export default function init(app) {
  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return path.resolve(process.cwd(), app, file);
  }

  function logger(message) {
    return new Promise((resolve) => {
      console.log();
      console.log(colors.cyan.bold(message));
      console.log();
      resolve();
    });
  }

  logger.ok = (message) => {
    return new Promise((resolve) => {
      console.log();
      console.log(colors.green.bold(message));
      console.log();
      resolve();
    });
  };

  return sequencer(
    () => logger('Installing React Native'),
    () => exec(`react-native init ${app}`),
    () => logger.ok('React Native installed'),
    () => logger('Update mobile indexes'),
    () => transform(
      getLocalFile('templates/index.mobile.js'),
      transformer,
      getAppFile('index.ios.js'),
    ),
    () => transform(
      getLocalFile('templates/index.mobile.js'),
      transformer,
      getAppFile('index.android.js'),
    ),
    () => logger('Create html for the web'),
    () => transform(
      getLocalFile('templates/index.html'),
      transformer,
      getAppFile('index.html'),
    ),
    () => logger('Create JS for the web'),
    () => transform(
      getLocalFile('templates/index.web.js'),
      transformer,
      getAppFile('index.web.js'),
    ),
    () => logger('Create app directory'),
    () => exec(`mkdir ${app}/app/`),
    () => logger('Create App'),
    () => transform(
      getLocalFile('templates/app/App.js'),
      transformer,
      getAppFile('app/App.js'),
    ),
    () => logger('Create webpack config file for web/desktop'),
    () => transform(
      getLocalFile('templates/webpack.config.js'),
      transformer,
      getAppFile('webpack.config.js'),
    ),
    () => logger('Create desktop directory'),
    () => exec(`mkdir ${app}/desktop/`),
    () => logger('Create html for desktop'),
    () => transform(
      getLocalFile('templates/index.desktop.html'),
      transformer,
      getAppFile('desktop/index.html'),
    ),
    () => logger('Create JS for desktop'),
    () => copy(
      getLocalFile('templates/index.desktop.js'),
      getAppFile('index.desktop.js'),
    ),
    () => logger('Installing npm dependencies'),
    () => npmInstall(app,
      'reactors',
      'react-dom',
      'babel-loader',
      'webpack',
      'babel-preset-react',
      'babel-preset-es2015',
      'babel-preset-stage-0',
      'ignore-loader',
    ),
    () => logger('Updating package.json'),
    () => changeJSON(
      getAppFile('package.json'),
      (json) => {
        json.main = 'index.desktop.js';
      },
    ),
    () => logger.ok(`Reactors app ${app} successfully created`),
  );
}
