// client computer
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on("connect", () => { 
    console.log("A player has joined the game.");
    conn.write("Name: VN");
  });

  /*conn.on("connect", () => {
    setInterval(() => {
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
}

module.exports = {connect};