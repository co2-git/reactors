import type {STYLE_TRANSFORMER} from '../../../config/types';

export default function stringifyTransformers(
  transformers: Array<STYLE_TRANSFORMER>
): string {
  return transformers
    .map((transformer: STYLE_TRANSFORMER): string =>
      Object
        .keys(transformer)
        .map(key => `${key}(${transformer[key]})`)
        .join(' ')
    )
    .join(' ');
}
