import {spawn} from 'child_process';

export default function (cmd, options = {}) {
  return new Promise((resolve, reject) => {
    const bits = cmd.split(/\s+/);
    const entry = bits.shift();
    const ps = spawn(entry, bits, options);

    ps
      .on('error', reject)
      .on('exit', status => {
        if (status === 0) {
          return resolve();
        }
        reject(new Error(`Got status ${status}`));
      });

    ps.stdout.pipe(process.stdout);
    ps.stderr.pipe(process.stderr);
  });
}
