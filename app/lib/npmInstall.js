import exec from './exec';

export default function (cwd, ...deps) {
  return exec('npm install --save ' + deps.join(' '), {cwd});
}
