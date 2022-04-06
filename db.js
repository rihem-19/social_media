const config = require('./dbconfig');
const mysql = require('mysql');

var conn = new mysql.createConnection(config);
const connectdb = async () => {
    try {
     // make sure that any items are correctly URL encoded in the connection string
     await conn.connect();
     console.log("mysql connected...");
    } catch (err) {
    console.error(err.message);
    process.exit(1);
    }
   }

   module.exports = connectdb;