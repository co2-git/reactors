#! /usr/bin/env node
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _init = require('../lib/init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$argv = _slicedToArray(process.argv, 4);

var cmd = _process$argv[2];
var app = _process$argv[3];


switch (cmd) {
  case 'init':
    console.log();
    console.log('Creating Reactors app', app);
    console.log();

    (0, _init2.default)(app).then(function () {
      return console.log('Your app is ready to be awesome');
    }).catch(function (error) {
      return console.log(error.stack);
    });
    break;
  default:
    console.log('reactors [init] [app]');
}