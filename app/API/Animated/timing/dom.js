const timing = (animatedValue, {toValue}) => ({
  start: () => {
    animatedValue.change({value: toValue});
  },
});

export default timing;
