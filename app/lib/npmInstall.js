import exec from '../util/exec';

export default function (cwd, ...deps) {
  return exec('npm install --save ' + deps.join(' '), {cwd});
}
