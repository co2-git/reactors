/**
  * @module reactors
  * @name ScrollView
  * @type Component
  * @flow
**/

export default function stringifyTransformers(
  transformers: Array<$reactors$StyleSheet$Transformer>
): string {
  return transformers
    .map((transformer: $reactors$StyleSheet$Transformer): string =>
      Object
        .keys(transformer)
        .map(key => `${key}(${transformer[key]})`)
        .join(' ')
    )
    .join(' ');
}
