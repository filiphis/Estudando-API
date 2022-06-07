const express = require("express");
const axios = require("axios");

const app = express();

app.listen(3001);

app.route("/").get(async (req, res) => {
  try {
    const githubUser = await axios.get("https://api.github.com/users/filiphis");
    res.send(`<img src="${githubUser.data.avatar_url}" >`);
  } catch (error) {
    res.statusCode = error.response.status;
    res.send(error.message);
  }
});
