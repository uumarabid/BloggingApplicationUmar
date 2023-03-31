import mysql from "mysql";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "admin",
  password: "123qwe123qwe",
  database: "blog",
});
