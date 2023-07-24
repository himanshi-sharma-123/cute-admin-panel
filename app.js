const express = require("express");
const port = process.env.PORT || 8004;

const app = express();

app.use(express.json());

app.use(express.urlencoded());

app.post("/login", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", (req, res) => {
  res.sendFile(__dirname + "/public/signuppage.html");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server is running");
});
