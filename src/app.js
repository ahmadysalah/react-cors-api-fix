const express = require("express");
const app = express();

const { fitchGithub, fitchCors } = require("./controller");

require('dotenv').config()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set("port", process.env.PORT || 4002);
app.get("/", (req, res) => {
  res.json("welcome to CORS");
});

app.get("/github-api-req", fitchGithub);
app.get("/cors", fitchCors);

app.use((req, res) => {
  res.status(404).json("wrong request");
});

module.exports = app;
