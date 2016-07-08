import 'colors';
import parseForWeb from '../../../src/API/StyleSheet/parseForWeb';

console.log('API / StyleSheet / parse for web'.bgBlue.bold.white);

const tests = [
  {
    label: 'if there is nothing to parse, it should return the same object',
    input: {
      fontSize: 10,
    },
    expected: {
      fontSize: 10,
    },
  },
  {
    label: 'it should add border style',
    input: {
      borderWidth: 2,
      borderColor: 'red',
    },
    expected: {
      borderWidth: 2,
      borderColor: 'red',
      borderStyle: 'solid',
    },
  },
  {
    label: 'it should add flex display',
    input: {
      flexDirection: 'row',
    },
    expected: {
      flexDirection: 'row',
      display: 'flex',
    },
  },
  {
    label: 'it should stringify transformers',
    input: {
      transform: [{scale: 1}, {translateX: 22}],
    },
    expected: {
      transform: 'scale(1) translateX(22)',
    },
  },
  {
    label: 'it should stringify transformers (more than 1 key in object)',
    input: {
      transform: [{scale: 1, translateX: 22}],
    },
    expected: {
      transform: 'scale(1) translateX(22)',
    },
  },
];

function exec(test) {
  let output;
  try {
    console.log('');
    output = parseForWeb(test.input);
    if (Object.keys(output).length !== Object.keys(test.expected).length) {
      throw new Error(`Expecting an object with
        ${Object.keys(test.expected).length} but got
        ${Object.keys(output).length}`
      );
    }
    for (const attr in test.expected) {
      if (output[attr] !== test.expected[attr]) {
        throw new Error(`Expecting ${attr} to be ${test.expected[attr]},
          instead got ${output[attr]}`);
      }
    }
    console.log(`√ ${test.label}`.green.bold);
    console.log();
    console.log(` input: ${JSON.stringify(test.input).bold}`.grey);
    console.log(` expected: ${JSON.stringify(test.expected).bold}`.grey);
    console.log();
  } catch (error) {
    console.log(`X ${test.label}`.red.bold);
    console.log();
    console.log(` input: ${JSON.stringify(test.input).bold}`.grey);
    console.log(` expected: ${JSON.stringify(test.expected).bold}`.grey);
    console.log(` output: ${JSON.stringify(output).bold}`.red);
    console.log();
    console.log(error.stack.yellow);
    console.log();
  }
}

tests.forEach(exec);
