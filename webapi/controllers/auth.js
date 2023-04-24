import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //check existing user
  const selectQuery = "SELECT * FROM users WHERE email = NULL OR username = ?";
  // console.log(selectQuery);

  db.query(selectQuery, [(req.body.email, req.body.username)], (err, data) => {
    if (err) return res.json(err);
    // if user exits
    if (data.length) return res.status(409).json("User already exists");

    // hash a password and create a user
    // https://www.npmjs.com/package/bcryptjs
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // insesrt user to database
    const insertQuery = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    console.log(insertQuery);
    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  // check user existance
  const selectQuery = "SELECT * FROM users WHERE username = ?";

  db.query(selectQuery, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    // another condition if no user in db
    if (data.length === 0) return res.status(404).json("User not found!");
    // if no err and user exists check password
    // comapre the plain text with hased passed using comapring function below
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!");

    // send user information that identifies user
    // store this token in web cookie to match the author of the post
    // https://www.npmjs.com/package/jsonwebtoken
    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    console.log(token);

    // separate password from other info
    const { password, ...other } = data[0];

    // return user information and send the token as a cookie
    res
      // .cookie("access_token", token, {
      //   // extra security, anny script in the browser or application can not access this cookie directly
      //   httpOnly: true,
      // })
      // thsi approch includes password in the data, used second approach
      // .status(200).json(data[0]);
      .status(200)
      .json({ token, ...other });
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};
