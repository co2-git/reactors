import path from 'path';
import sequencer from 'promise-sequencer';
import exec from '../lib/exec';
import transform from '../lib/transform';
import write from '../lib/write';
import npmInstall from '../lib/npmInstall';

function getLocalFile(file) {
  return path.resolve(__dirname, '../../app', file);
}

export default function init(app) {
  function transformer(source) {
    return source.replace(/\{app\}/g, app);
  }

  function getAppFile(file) {
    return path.resolve(process.cwd(), app, file);
  }

  return sequencer(
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
    () => exec(`mkdir -p ${app}/app/`),
    () => transform(
      getLocalFile('templates/App.js'),
      transformer,
      getAppFile('app/App.js'),
    ),
    () => transform(
      getLocalFile('templates/App.js'),
      transformer,
      getAppFile('app/App.js'),
    ),
    () => npmInstall(app, 'co2-git/reactor')
  );
}
