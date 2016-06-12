import path from 'path';
import sequencer from 'promise-sequencer';
import exec from '../lib/exec';
import transform from '../lib/transform';
import changeJSON from '../lib/changeJSON';
import npmInstall from '../lib/npmInstall';
import copy from '../lib/copy';

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
      console.log(message);
      console.log();
      resolve();
    });
  }

  return sequencer(
    () => logger('Installing React Native'),
    () => exec(`react-native init ${app}`),
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
    () => transform(
      getLocalFile('templates/index.html'),
      transformer,
      getAppFile('index.html'),
    ),
    () => transform(
      getLocalFile('templates/index.web.js'),
      transformer,
      getAppFile('index.web.js'),
    ),
    () => exec(`mkdir ${app}/app/`),
    () => transform(
      getLocalFile('templates/app/App.js'),
      transformer,
      getAppFile('app/App.js'),
    ),
    () => transform(
      getLocalFile('templates/webpack.config.js'),
      transformer,
      getAppFile('webpack.config.js'),
    ),
    () => exec(`mkdir ${app}/desktop/`),
    () => transform(
      getLocalFile('templates/index.desktop.html'),
      transformer,
      getAppFile('desktop/index.html'),
    ),
    () => copy(
      getLocalFile('templates/index.desktop.js'),
      getAppFile('index.desktop.js'),
    ),
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
    () => changeJSON(
      getAppFile('package.json'),
      (json) => {
        json.main = 'index.desktop.js';
      },
    ),
  );
}
