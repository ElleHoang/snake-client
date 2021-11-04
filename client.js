// client computer
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on("connect", () => { 
    console.log("A player has joined the game.");
    conn.write("Name: VN");
  });

  conn.on("connect", () => {
    /*setInterval(() => {
      conn.write("Move: up");
      setInterval(() => {
        conn.write("Move: up");
        setInterval(() => {
          conn.write("Move: left");
        }, 500);
      }, 1000);
    }, 1500); 
  })*/
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect }