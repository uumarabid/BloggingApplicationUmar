import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  //check existing user
  const q = "SELECT * FROM users WHERE `email` IS NULL OR `username` = ?";
  console.log(q);

  db.query(q, [(req.body.email, req.body.username)], (err, data) => {
    if (err) return res.json(err);
    // if user exits
    if (data.length) return res.status(409).json("User already exists");

    // hash a password and create a user
    // https://www.npmjs.com/package/bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // insesrt user to database
    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    console.log(q);
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
