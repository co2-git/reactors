import fs from 'fs';
import read from './read';
import write from './write';
import sequencer from 'promise-sequencer';

export default function(file, transformer, target) {
  return sequencer(
    () => read(file),
    source => write(target || file, transformer(source))
  );
}
