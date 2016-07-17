import 'babel-polyfill';
import path from 'path';
import exec from '../lib/exec';
import transform from '../lib/transform';
import changeJSON from '../lib/changeJSON';
import npmInstall from '../lib/npmInstall';
import write from '../lib/write';
import read from '../lib/read';
import copy from '../lib/copy';
import logger from '../lib/logger';
import pkg from '../../package.json';

export default function init(app: string, dest: string): Promise<void> {
  const _src = path.resolve(__dirname, '../../');
  const _dest = dest || process.cwd();

  function transformer(source: string): string {
    return source.replace(/\{app\}/g, app);
  }

  function getSourceFilePath(file: string): string {
    return path.join(_src, file);
  }

  function getDestFilePath(file: string): string {
    return path.join(_dest, app, file);
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
        'README.md',
      ];

      const templatesToCopy = [
        'index.electron.js',
      ];

      await logger('Installing React Native');
      await exec(`react-native init ${app}`, {cwd: _dest});
      await logger.ok('React Native installed');

      await logger('Create app directories');
      await exec(`mkdir ${app}/app/`, {cwd: _dest});
      await exec(`mkdir ${app}/desktop/`, {cwd: _dest});

      await logger('Install templates');
      for (const template of templatesToTransform) {
        if (typeof template === 'string') {
          await transform(
            getSourceFilePath(`templates/${template}`),
            transformer,
            getDestFilePath(template),
          );
        } else if (typeof template === 'object') {
          for (const local in template) {
            if (template[local]) {
              await transform(
                getSourceFilePath(`templates/${local}`),
                transformer,
                getDestFilePath(template[local]),
              );
            }
          }
        }
      }
      for (const template of templatesToCopy) {
        if (typeof template === 'string') {
          await copy(
            getSourceFilePath(`templates/${template}`),
            getDestFilePath(template),
          );
        } else if (typeof template === 'object') {
          for (const local in template) {
            if (template[local]) {
              await copy(
                getSourceFilePath(`templates/${local}`),
                getDestFilePath(template[local]),
              );
            }
          }
        }
      }

      await logger('Installing npm dependencies');
      await npmInstall(path.join(_dest, app),
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
        getDestFilePath('package.json'),
        (json) => {
          json.main = 'index.desktop.js';
        },
      );

      await logger('create reactors.json');
      await write(
        getDestFilePath('reactors.json'),
        JSON.stringify({version: pkg.version}),
      );

      await logger('Add bundles to gitignore');
      const gitignore = await read(getDestFilePath('.gitignore'));
      await write(
        getDestFilePath('.gitignore'),
        `${gitignore}

# Reactors

/desktop/bundle.js
/web/bundle.js
`,
      );

      await logger.ok(`Reactors app ${app} successfully created`);

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
