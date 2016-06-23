import 'babel-polyfill';
import semver from 'semver';
import read from './read';
import changeJSON from './changeJSON';
import getAppFile from './getAppFile';
import v0_1_4 from '../migrations/v0.1.4';
import pkg from '../../package.json';

const versions = {
  '0.1.4': v0_1_4,
};

export default () => new Promise(async (resolve, reject) => {
  try {
    let reactors;
    try {
      reactors = await read(getAppFile('reactors.json'));
    } catch (error) {
      reactors = {};
    }
    const updatable = versions.filter(version =>
      semver.gt(version, reactors.version) && semver.lte(version, pkg.version)
    );
    updatable.forEach(async (fn) => await fn());
    await changeJSON(
      getAppFile('reactors.json'),
      json => {
        json.version = pkg.version;
      },
    );
    resolve();
  } catch (error) {
    reject(error);
  }
});
