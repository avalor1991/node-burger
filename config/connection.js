var mysql = require("mysql");

var connection;

if (process.env.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "y6oytfo0ro360dxe",
        password: "tliu4559qra1soit",
        database: "su6clpydvy673xu8"
    })
}

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// });

// connection.connect(function(err){
//     if (err) {
//         console.log("Error connecting: " + err.back);
//         return;
//     }
//     console.log("Connected as id: " + connection.threadId);
// });

connection.connect();
module.exports = connection;