import read from '../util/read';
import write from './write';
import sequencer from 'promise-sequencer';

export default function(source, target) {
  return sequencer(
    () => read(source),
    content => write(target, content),
  );
}
