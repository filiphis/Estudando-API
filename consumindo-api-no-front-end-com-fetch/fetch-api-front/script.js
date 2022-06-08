const URL = "http://localhost:5501/api";

async function getUsers() {
  try {
    const response = await fetch(URL);
    const users = await response.json();
    renderApiResult.innerHTML += `<br><br> <h1>Lista todos usuarios </h1> ${JSON.stringify(
      users
    )}`;
  } catch (error) {
    console.log(error);
  }
}

getUsers();

async function getUserDetails(userID) {
  try {
    const response = await fetch(`${URL}/${userID}`);
    const user = await response.json();
    renderApiResult.innerHTML += `<br><br> <h1>Lista detalhes do usuario </h1>`;
    userName.textContent = user.name;
    userCity.textContent = user.city;
    // userAvatar.setAttribute("src", `${user.avatar}`);
    userAvatar.src = user.avatar;

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

// Buscando user manualmente, quando atualiza a pagina kk
getUserDetails(6);

async function addUser(user) {
  const newUser = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await newUser.json();
  console.log("Post: ", data);
}

const newUser = {
  name: "Rafaela Patricio",
  avatar: "https://picsum.photos/600/600",
  city: "Cascavel",
};

// Adiciona o user quando atualiza a pagina!
// addUser(newUser);

const userUpdate = {
  name: "Rosaaaaaa Augusta",
  avatar: "https://picsum.photos/600/600",
  city: "Cascavel",
};

async function updateUser(updateValues, id) {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updateValues),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const update = await response.json();
  alertApi.textContent = update;
}

updateUser(userUpdate, 6);
