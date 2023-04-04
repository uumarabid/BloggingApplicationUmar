import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //check existing user
  const q = "SELECT * FROM `users` WHERE `email` = ? OR `username` = ?";
  console.log(q);

  db.query(q, [(req.body.email, req.body.name)], (err, data) => {
    if (err) return res.json(err);
    // if user exits
    if (data.length) return res.json("User already exist");

    // hash a password and create a user
    // https://www.npmjs.com/package/bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // insesrt user to database
    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?,?,?)";
    const values = [req.body.username, req.body.email, hash];
    console.log(q);
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("User has been created.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
