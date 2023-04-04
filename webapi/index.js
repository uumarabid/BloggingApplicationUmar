import express from "express";
import router from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

//https://www.npmjs.com/package/cors
import cors from "cors"; // need this package for cross origin requests, (for any request that comes from outside of the application)
//https://www.npmjs.com/package/body-parser
import bodyParser from "body-parser"; //  using this package to receive data in the api call, as sending paramteres to api calls like get, add, update

const app = express().use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
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
