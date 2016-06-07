import exec from './exec';

export default function bundle() {
  return exec('node_modules/.bin/webpack');
}
