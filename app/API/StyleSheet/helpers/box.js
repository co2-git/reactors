export default function box(top, right, bottom, left) {
  const topIsANumber = typeof top === 'number';
  const topIsAnObject = typeof top === 'object';
  const rightIsANumber = typeof right === 'number';
  const bottomIsANumber = typeof bottom === 'number';
  const leftIsANumber = typeof left === 'number';

  if (topIsANumber && !rightIsANumber && !bottomIsANumber && !leftIsANumber) {
    return {
      top,
    };
  }

  if (top && topIsAnObject) {
    return top;
  }

  return {};
}
