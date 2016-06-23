import path from 'path';

export default function getAppFile(file, app) {
  return path.resolve(process.cwd(), app || '', file);
}
