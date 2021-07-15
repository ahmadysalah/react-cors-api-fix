const axios = require("axios");
require('dotenv').config()

const controller = {
  fitchGithub: (req, res) => {
    const { link } = req.query;
    axios
      .get(`${link}?access_token=${process.env.TOKEN}`)
      .then((result) => res.json({ status: 'Successfully', data: result.data }))
      .catch(() =>
        res.status(400).json({
          status: 400,
          link,
          message: "Link error",
        })
      );
  },
  fitchCors: (req, res) => {
    // new update to handle more than parameter in query string 
    const query = req.query;
    const link = Object.keys(query)
      .map((string, index) =>
      (
        `${index !== 0 ? '&':''}${string}=${query[string]}`
      )).join('').replace('link=','')
    console.log({ query,link })
    axios
      .get(`${link}`)
      .then((result) => res.json({ status: 'Successfully', data: result.data }))
      .catch(() =>
        res.status(400).json({
          status: 400,
          link,
          message: "Link error",
        })
      );
  },
};


module.exports = controller;
