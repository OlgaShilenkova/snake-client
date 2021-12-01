
const connect = require("./client.js")

// console.log(`${connect}`);

// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  // your code here
  // process.stdout.write('.');
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
}

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();