import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "admin",
  password: "123qwe123qwe",
  database: "blog",
});
