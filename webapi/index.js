const express = require("express");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
