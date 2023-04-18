import { db } from "../db.js";

export const getPosts = (req, res) => {
  // access to cat query
  const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
  // res.json("New post is added successfully.");
};

export const getPost = (req, res) => {
  // find post using id
  const q =
    "SELECT `username`, `title`, `description`, `p.img`, `cat`, `` FROM users u JOIN posts p ON u.id=p.userId WHERE p.id = ?";

  // post id => (prams) id in url
  db.query(q, [req.prams.id], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
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
