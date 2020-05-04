const express = require("express");
const app = express();

const {fitchGithub,fitchCors} = require("./controller");

require('dotenv').config()

app.set("port", process.env.PORT || 4002);

app.get("/github-api-req",fitchGithub);
app.get("/cors",fitchCors);

app.use((req, res) => {
  res.status(404).json("wrong request");
});

module.exports = app;
