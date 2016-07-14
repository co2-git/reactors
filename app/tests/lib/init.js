import fs from 'fs';
import describe from 'redtea';
import sequencer from 'promise-sequencer';
import init from '../../lib/init';

const {promisify} = sequencer;

const locals = {};

export default describe.batch('Lib / Init',
  describe.promise(
    'Init a new app',
    () => init('Foo', '/tmp'),
    {not: {type: Error}},
  ),
  describe.promise(
    'Directory was created',
    () => promisify(fs.stat, ['/tmp/Foo']).then(stat => {
      locals.stat = stat;
      return stat;
    }),
    {not: {type: Error}},
  ),
  describe.promise(
    'Directory is a directory',
    () => new Promise((resolve) => resolve(locals.stat.isDirectory())),
    {value: true}
  ),
);
