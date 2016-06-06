import read from './read';
import write from './write';
import sequencer from 'promise-sequencer';

export default function(file, changer) {
  return sequencer(
    () => read(file),
    content => new Promise((resolve, reject) => {
      try {
        content = content.replace(/\n/g, '').replace(/\s\s+/g, '');
        const json = JSON.parse(content);
        changer(json);
        resolve(json);
      }
      catch (error) {
        reject(error);
      }
    }),
    json => write(file,
      JSON.stringify(json, null, 2)
    ),
  );
}
