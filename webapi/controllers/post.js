import jwt from "jsonwebtoken";
import { db } from "../db.js";

export const getPosts = (req, res) => {
  // access to cat query
  const selectQuery = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query(selectQuery, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
  // res.json("New post is added successfully.");
};

export const getPost = (req, res) => {
  // find post using id
  // console.log(req);
  // const id = req.query.id;
  const selectCustomQuery =
    "SELECT `username`, `title`, `description`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ?";
  // console.log(selectCustomQuery);
  // post id => (prams) id in url
  db.query(selectCustomQuery, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  // verify token if its valid or not
  // userinfo => auth => const token = jwt.sign({ id: data[0].id }, "jwtkey");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");

    const insertQuery = "INSERT INTO posts(`title`,`description`,`img`,`cat`,`date`,`userId`) VALUES (?)";
    const values = [req.body.title, req.body.description, req.body.img, req.body.cat, req.body.date, userInfo.id];

    db.query(insertQuery, [values], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  // check json web token first in cookies & post not belongs to user => cannot delete post
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  // verify token if its valid or not
  // userinfo => auth => const token = jwt.sign({ id: data[0].id }, "jwtkey");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");

    // if token is valid then delete the post
    // take post id first
    const postId = req.params.id;
    const deleteQuery = "DELETE FROM posts WHERE `id` = ? AND `userId` = ?";

    db.query(deleteQuery, [postId, userInfo.id], (err, data) => {
      if (err) return res.json("You can delete only your post!!.");

      return res.json("Post has been deleted.");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  // verify token if its valid or not
  // userinfo => auth => const token = jwt.sign({ id: data[0].id }, "jwtkey");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid.");

    const postId = req.params.id;

    const updateQuery = "UPDATE posts SET `title`=?, `description`= ?, `img`= ?, `cat`= ? WHERE `id`= ? AND `userId`= ?";
    const values = [req.body.title, req.body.description, req.body.img, req.body.cat];

    db.query(updateQuery, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.json("Post has been updated.");
    });
  });
};
