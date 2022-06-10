const URL = "http://localhost:5501/api";

async function getUsers() {
  try {
    renderApp.innerHTML = "";
    const response = await axios.get(URL);
    const users = response.data.users;

    users.forEach((user) => (renderApp.innerHTML += renderUser(user)));
  } catch (error) {
    console.log(error);
  }
}

async function getUser() {
  try {
    const id = userID.value;
    const response = await axios.get(`${URL}/${id}`);
    const user = response.data;
    if (!user.id) {
      renderUsuario.innerHTML = `<p class="errorMessage">${user}</p>`;
      return;
    }
    renderUsuario.innerHTML = renderUser(user);

    console.log(user);
  } catch (error) {
    alert("Usuario não cadastrado!");
    console.log(error);
  }
}

function renderUser(user) {
  return `
  <div class="borderDiv">
    <p>Id: ${user.id}</p>
    <p>${user.name}</p>
    <img width="100" src="${user.avatar}" />
    <p>${user.city}</p>
  </div>
  `;
}

async function addUser(user) {
  try {
    const response = await axios.post(URL, user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const formAddUser = document.querySelector("#formAddUser");

formAddUser.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser = getUserValues(event);
  addUser(newUser);
});

function getUserValues(event) {
  const name = formAddUser.querySelector("#inputName").value;
  const avatar = formAddUser.querySelector("#inputAvatar").value;
  const city = formAddUser.querySelector("#inputCity").value;

  const newUser = {
    name,
    avatar,
    city,
  };

  return newUser;
}
