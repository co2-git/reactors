import colors from 'colors';

function logger(message) {
  return new Promise((resolve) => {
    console.log();
    console.log(colors.cyan.bold(message));
    console.log();
    resolve();
  });
}

logger.ok = (message) => {
  return new Promise((resolve) => {
    console.log();
    console.log(colors.green.bold(message));
    console.log();
    resolve();
  });
};

export default logger;
