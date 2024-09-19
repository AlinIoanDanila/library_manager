const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ name: "test", author: "test" });
});

app.listen(3000, () => {
  console.log("Server listening");
});
