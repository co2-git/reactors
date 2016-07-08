import 'colors';
import parseForMobile from '../../../src/API/StyleSheet/parseForMobile';

console.log('API / StyleSheet / parse for mobile'.bgBlue.bold.white);

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
    label: 'it should remove transition',
    input: {
      transition: 'width 2s',
    },
    expected: {},
  }
];

function exec(test) {
  let output;
  try {
    console.log('');
    output = parseForMobile(test.input);
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
