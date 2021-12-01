const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (message) => {
    // code that does something when the connection is first established
    console.log("Server says ", message);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: OLG");
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 50)
  });



  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;