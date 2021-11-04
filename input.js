let connection;
//const { connect } = require("./client");

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin; // allows us to listen to keyboard input and react to it
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // stdin.on("data", handleUserInput);
  
  const handleUserInput = function () {
    stdin.on("data", (key) => {
      if (key === "\u0003") { // exit using \u0003 - maps to ctrl+c input to exit
        process.exit();
      } else if (key === "w") {
        conn.write("Move: up");
      } else if (key === "a") {
        conn.write("Move: left");
      } else if (key === "s") {
        conn.write ("Move: down");
      } else if (key === "d") {
        conn.write ("Move: right");
      }
    });
  }
  handleUserInput();
  
  return stdin;
};

module.exports = { setupInput }