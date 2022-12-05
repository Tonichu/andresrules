import mysql from "mysql2";

const PORT=3000;

const connectionData = {
  host: "localhost",
  user: "root",
  password: "1234",
  database: "xa_points"
}

const db = mysql.createConnection(connectionData);

export {PORT, db, connectionData};