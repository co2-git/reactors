const timing = (animatedValue, {duration = '1s', toValue}) => ({
  start: () => {
    animatedValue.change({value: toValue, duration});
  },
});

export default timing;
