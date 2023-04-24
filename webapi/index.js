import express from "express";
import router from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";

//https://www.npmjs.com/package/cors
import cors from "cors"; // need this package for cross origin requests, (for any request that comes from outside of the application)
//https://www.npmjs.com/package/body-parser
import bodyParser from "body-parser"; //  using this package to receive data in the api call, as sending paramteres to api calls like get, add, update

const app = express().use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
const port = 3001;

app.get("/", (req, res) => {
  res.send("The application is running");
});

app.use(express.json());
app.use(cookieParser());

// use multer storage instead of destination and give specific name to img

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../webapp/public/upload");
  },
  filename: function (req, file, cb) {
    // to prevent overridding the same img use date.now()
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

// https://www.npmjs.com/package/multer
// use multer for save img on server

// const upload = multer({ dest: "./uploads/" });

app.post("/webapi/upload/", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/auth", authRoutes);
app.use("/user", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
