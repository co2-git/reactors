import "babel-polyfill";
import sequencer from 'promise-sequencer';
import read from './read';
import getAppFile from './getAppFile';
import v0_1_4 from '../migrations/v0.1.4';

export default function upgrade() {
  return new Promise(async (resolve, reject) => {
    try {
      const pkg = await read(getAppFile('node_modules/reactors/package.json'));
      const json = JSON.parse(pkg);
    } catch (error) {
      reject(error);
    }
  });
}
