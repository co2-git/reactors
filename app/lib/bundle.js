import exec from './exec';

export default function bundle(platform) {
  console.log('bundle', platform);
  return exec('node_modules/.bin/webpack', {
    env: {
      ...process.env,
      REACTORS_PLATFORM: platform,
    },
  });
}
