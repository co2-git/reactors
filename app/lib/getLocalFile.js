import path from 'path';

export default function getLocalFile(file) {
  return path.resolve(__dirname, '../../', file);
}
