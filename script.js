const express = require("express");
const app = express();
const Token = require("./middleware/token");
const Validation = require("./middleware/validation");

app.use(DateGenerator);

const middleware = [Token, Validation];

app.get("/profile", [...middleware], (req, res) => {
  console.log("User Logged");
  res.send("<h1>Success</h1>");
});

app.get("/", (req, res) => {
  console.log("Default URL");
  res.send("<h1>Home</h1>");
});

function DateGenerator(req, res, next) {
  console.log(new Date());
  next();
}

const PORT = process.env.PORT || 3001;

app.listen(PORT);
