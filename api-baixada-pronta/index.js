const express = require("express");
const cors = require("cors");

const app = express();

app.listen(5501, () => console.log("Rodando na porta 5501"));

app.use(cors());

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Luiz Silveira",
    avatar: "https://avatars.githubusercontent.com/u/13370451?v=4",
    city: "Cascavel",
  },
  {
    id: 2,
    name: "Gustavo Patricio da Silveira",
    avatar: "https://avatars.githubusercontent.com/u/13370451?v=4",
    city: "Cascavel",
  },
];

app.route("/api").get((req, res) =>
  res.json({
    users,
  })
);

app.route("/api/:id").get((req, res) => {
  const userId = req.params.id;

  const user = users.find((user) => Number(user.id) === Number(userId));

  if (!user) {
    return res.json("User nor found!");
  }

  res.json(user);
});

app.route("/api").post((req, res) => {
  const lastId = users.length == 0 ? 0 : users[users.length - 1].id;
  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
  });
  res.json("Saved user");
});

app.route("/api/:id").put((req, res) => {
  const userId = req.params.id;

  const user = users.find((user) => Number(user.id) === Number(userId));

  if (!user) {
    return res.json("User nor found!");
  }

  const updatedUser = {
    ...user,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city,
  };

  users = users.map((user) => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser;
    }
    return user;
  });

  res.json("Updated user");
});

app.route("/api/:id").delete((req, res) => {
  const userId = req.params.id;

  users = users.filter((user) => Number(user.id) !== Number(userId));

  res.json("Deleted User");
});
