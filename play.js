// client computer
const net = require("net");
const connect = require('./client');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', //Server IP address
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
          // "connect" is specific event that happens when successful connection is made
  conn.on("connect", () => { // .on method specify event name & function that does something when event happens
    conn.write('Name: VN');
  });
  return conn;
};

console.log("Connecting ...");
connect();