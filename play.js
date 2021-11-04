// client computer
const net = require("net");
const connect = require('./client');

const setupInput = function () {
  const stdin = process.stdin; // allows us to listen to keyboard input and react to it
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  const handleUserInput = function () {
    stdin.on('data', (key) => {
      if (key === '\u0003') { // exit using \u0003 - maps to ctrl+c input to exit
        process.exit();
      }
    })
  }
  handleUserInput();
  return stdin;
};

console.log("Connecting ...");
connect();