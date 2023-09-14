const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("that the server is running on port.");
});
app.listen(port, () => {
  console.log("hi");
});
