const express = require("express");

const app = express();

app.route("/").get((req, res) => res.send("Hello world"));
app.route("/sobre").get((req, res) => res.send("Hello sobre"));

app.use(express.json());

app.route("/post").post((req, res) => {
  res.send(req.body);
});

let nome = "Luiz";

app.route("/put").put((req, res) => {
  nome = req.body.myName;
  console.log(nome);
  res.send(nome);
});

app.route("/delete/:id").delete((req, res) => {
  res.send(`Apagado! Id: ${req.params.id}`);
});

app.listen(3000);
