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

// Estudando Body Params
// Body Params são os valores que são enviados no corpo da requisição, geralmente são enviados por formularios de cadastro
// Podem ser obtidos pelo request.BODY
app.route("/body-params").post((req, res) => {
  const { first_name, last_name, age } = req.body;
  res.send(first_name);
  // res.send(req.body);
});

//Estudando Route Params
// Route Params são valores enviadores pela rota/URL
// Podem ser obtidos pelo request.PARAMS
app.route("/route-params/:variavel").get((req, res) => {
  res.send(req.params.variavel);
});

// Estudando Query Params
// Query Params tambem são passados/obtidos pela URL.
// São obtidos após um interrogação ? na URL. Eles funcionam no estilo chave=valor
// Ex: localhost:3000/query-params?nome=luiz&idade=27&filho=gustavo

app.route("/query-params").get((req, res) => {
  const { nome } = req.query;
  // res.send(nome);
  res.send(req.query);
});
