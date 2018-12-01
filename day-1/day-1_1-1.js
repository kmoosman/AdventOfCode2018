const fs = require('fs');
const mocha = require('mocha');
const chai = require('chai');

// node ./day-1/1-1.js ./day-1/input.txt
// ./node_modules/.bin/mocha --ui tdd ./day-1/1-1.js

/*
===============================================================================
Get Input and main function run - wont run when unit testing
===============================================================================	
*/
if (process.argv.length > 1 && process.argv[1] === __filename) {
  fs.readFile(process.argv[2], 'utf8', function(err, input) {
    let lines = input.split('\n');
    console.log('lines', lines);
  });
}

function sum(a, b) {
  return a + b;
}

/*
===============================================================================
UNIT TESTS - only runs when unit testing
===============================================================================	
*/
if (process.argv.length > 1 && process.argv[1].includes('mocha')) {
  let expect = chai.expect;
  let assert = chai.assert;

  mocha.suite(__filename.split('/').reverse()[0] + ' tests', function() {
    mocha.test('sum', function() {
      expect(sum(1, 1)).to.equal(2);
      expect(sum(2, 2)).to.equal(4);
    });
  });
}
