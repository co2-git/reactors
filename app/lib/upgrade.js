import 'babel-polyfill';
import path from 'path';
import semver from 'semver';
import read from './read';
import write from './write';
import changeJSON from './changeJSON';
import getAppFile from './getAppFile';
import v0_1_4 from '../migrations/v0.1.4';
import pkg from '../../package.json';

const migrations = [
  {version: '0.1.4', migrate: v0_1_4},
];

let base = getAppFile('');

if (/\/node_modules\/reactors$/.test(base)) {
  base = base.replace(/\/node_modules\/reactors$/, '');
}

function getFile(file) {
  return path.join(base, file);
}

export default () => new Promise(async (resolve, reject) => {
  try {
    let reactors;
    let first_time = false;
    try {
      reactors = await read(getFile('reactors.json'));
      reactors = JSON.parse(reactors);
    } catch (error) {
      first_time = true;
      reactors = {
        version: pkg.version,
      };
    }
    const versions = migrations.filter(migration =>
      semver.gt(migration.version, reactors.version) &&
        semver.lte(migration.version, pkg.version)
    );
    versions.forEach(async (migration) => await migration.migrate());
    if (first_time) {
      await write(
        getFile('reactors.json'),
        JSON.stringify(reactors, null, 2),
      );
    } else {
      await changeJSON(
        getFile('reactors.json'),
        json => {
          json.version = pkg.version;
        },
      );
    }
    resolve();
  } catch (error) {
    reject(error);
  }
});
