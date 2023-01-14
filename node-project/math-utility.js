const { exit } = require("process");

// node-project/cat-facts.js
// to execute: from the command line, run 'node math-utility'

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sqrRootOfReadlinNumber(input) {
  console.log(`Sq root of your number is ${Math.sqrt(input)}!`);
  readline.close();
}

readline.question("Give me a number? ", sqrRootOfReadlinNumber);
