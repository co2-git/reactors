import exec from '../util/exec';

export default function bundle(platform) {
  return exec('node_modules/.bin/webpack', {
    env: {
      ...process.env,
      REACTORS_PLATFORM: platform,
    },
  });
}
