// @flow

export default function props(defaultProps) {
  const reactorsProps = {...defaultProps};
  delete reactorsProps.reactorsPlatform;
  return reactorsProps;
}
