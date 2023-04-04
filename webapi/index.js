import express from "express";
import router from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("The application is running");
});

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
