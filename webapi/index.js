import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("The application is running");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
