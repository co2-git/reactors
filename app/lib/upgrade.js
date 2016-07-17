import path from 'path';
import semver from 'semver';
import read from './read';
import write from './write';
import changeJSON from './changeJSON';
import getAppFile from './getAppFile';
import v0_1_4 from '../migrations/v0.1.4';
import v0_1_9 from '../migrations/v0.1.9';
import v0_1_11 from '../migrations/v0.1.11';
import v0_1_15 from '../migrations/v0.1.15';
import v0_1_16 from '../migrations/v0.1.16';
import v0_1_18 from '../migrations/v0.1.18';
import v0_1_20 from '../migrations/v0.1.20';
import pkg from '../../package.json';

const migrations = [
  {version: '0.1.4', migrate: v0_1_4},
  {version: '0.1.9', migrate: v0_1_9},
  {version: '0.1.11', migrate: v0_1_11},
  {version: '0.1.15', migrate: v0_1_15},
  {version: '0.1.16', migrate: v0_1_16},
  {version: '0.1.18', migrate: v0_1_18},
  {version: '0.1.20', migrate: v0_1_20},
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
    console.log(`upgrading from ${reactors.version} to ${pkg.version}`);

    const versions = migrations.filter(migration =>
      semver.gt(migration.version, reactors.version) &&
        semver.lte(migration.version, pkg.version)
    );

    for (const version of versions) {
      console.log('migrating to version', version);
      await version.migrate();
    }

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
