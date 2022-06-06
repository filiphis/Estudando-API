const express = require("express");

const app = express();

app.listen(3000);

// Estudando os verbos http GET, POST, PUT e DELETE

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

// ----------

// Estudando body params
// Body Params são os valores que são enviados no corpo da requisição, geralmente são enviados por formularios de cadastro
// Podem ser obtidos pelo request.body
app.route("/body-params").post((req, res) => {
  const { first_name, last_name, age } = req.body;
  res.send(first_name);
});
