import exec from './exec';
import path from 'path';

export default function (app, ...deps) {
  return exec('npm install --save ' + deps.join(' '),
    {cwd: path.join(process.cwd(), app)}
  );
};
