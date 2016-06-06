#! /usr/bin/env node

import init from '../lib/init';

const [,,cmd,app] = process.argv;

switch (cmd) {
case 'init':
  console.log();
  console.log('Creating Reactor app', app);
  console.log();

  init(app)
    .then(() => console.log('Your app is ready to be awesome'))
    .catch(error => console.log(error.stack));
  break;
default:
  console.log('reactor [init] [app]');
}
