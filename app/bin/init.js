import init from '../lib/init';

const [,,app] = process.argv;

console.log();
console.log('Creating Reactor app', app);
console.log();

init(app)
  .then(() => console.log('Your app is ready to be awesome'))
  .catch(error => console.log(error.stack));
