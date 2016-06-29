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
      const templatesToTransform = [
        {'index.mobile.js': 'index.ios.js'},
        {'index.mobile.js': 'index.android.js'},
        'index.html',
        'index.web.js',
        'index.dom.js',
        'index.desktop.js',
        'app/App.js',
        'webpack.config.js',
        {['index.desktop.html']: 'desktop/index.html'},
      ];

      const templatesToCopy = [
        'index.electron.js',
      ];

      await logger('Installing React Native');
      await exec(`react-native init ${app}`);
      await logger.ok('React Native installed');

      await logger('Create app directories');
      await exec(`mkdir ${app}/app/`);
      await exec(`mkdir ${app}/desktop/`);

      await logger('Install templates');
      for (const template of templatesToTransform) {
        if (typeof template === 'string') {
          await transform(
            getLocalFile(`templates/${template}`),
            transformer,
            getAppFile(template),
          );
        } else if (typeof template === 'object') {
          for (const local in template) {
            if (template[local]) {
              await transform(
                getLocalFile(`templates/${local}`),
                transformer,
                getAppFile(template[local]),
              );
            }
          }
        }
      }
      for (const template of templatesToCopy) {
        if (typeof template === 'string') {
          await copy(
            getLocalFile(`templates/${template}`),
            getAppFile(template),
          );
        } else if (typeof template === 'object') {
          for (const local in template) {
            if (template[local]) {
              await copy(
                getLocalFile(`templates/${local}`),
                getAppFile(template[local]),
              );
            }
          }
        }
      }

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
