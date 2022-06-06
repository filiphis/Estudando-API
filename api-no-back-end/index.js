const express = require("express");

const app = express();

app.route("/").get((req, res) => res.send("Hello world"));
app.route("/sobre").get((req, res) => res.send("Hello sobre"));

app.listen(3000);
