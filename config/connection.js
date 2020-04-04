const mysql = require("mysql");

if(process.env.NODE_ENV === "production") {
  var connection = mysql.createConnection(process.env.JAWSDB);
} else {
  const connection = mysql.createConnection({
    host: "umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "gj6rh45swtd5ki9k",
    password: "bci81cgsehganpa0",
    database: "vw47fjrdrcu34zm3"
  });
    
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
