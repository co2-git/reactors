import fs from 'fs';

export default function (file, source, options = {}) {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(file, options);
    stream
      .on('error', reject)
      .on('finish', resolve);
    stream.write(source);
    stream.end();
  });
}
