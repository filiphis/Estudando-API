const express = require("express");
const axios = require("axios");

const app = express();

app.listen(3001);

app.route("/").get(async (req, res) => {
  const githubUser = await axios.get("https://api.github.com/users/filiphis");
  res.send(githubUser.data);
});
