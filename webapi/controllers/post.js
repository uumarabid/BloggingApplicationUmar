import { db } from "../db.js";

export const getPosts = (req, res) => {
  // access to cat query
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return req.send(err);

    return res.status(200).json(data);
  });
  res.json("New post is added successfully.");
};

export const getPost = (req, res) => {
  res.json("New post is added successfully.");
};

export const addPost = (req, res) => {
  res.json("New post is added successfully.");
};

export const deletePost = (req, res) => {
  res.json("New post is added successfully.");
};

export const updatePost = (req, res) => {
  res.json("New post is added successfully.");
};
