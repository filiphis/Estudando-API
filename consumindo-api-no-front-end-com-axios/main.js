const URL = "http://localhost:5501/api";

async function getUsers() {
  try {
    renderApp.innerHTML = "";
    const response = await axios.get(URL);
    const users = response.data.users;

    users.forEach((user) => (renderApp.innerHTML += `${renderUser(user)}`));
    const btnDelete = document.querySelectorAll("#deletarUser");

    if (btnDelete) {
      btnDelete.forEach((btn) => {
        btn.addEventListener("click", () => {
          deleteUser(btn.value);
        });
      });
    }
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
  } catch (error) {
    alert("Usuario não cadastrado!");
    console.log(error);
  }
}

function renderUser(user, deleteOn) {
  deleteOn = true;
  return `
  <div class="borderDiv">
    <p>Id: ${user.id}</p>
    <p>${user.name}</p>
    <img width="100" src="${user.avatar}" />
    <p>${user.city}</p>
    <p>${
      deleteOn
        ? "<button id='deletarUser' value=" + user.id + ">Deletar</button>"
        : ""
    }</p>
  </div>
  `;
}

async function addUser(user) {
  try {
    const response = await axios.post(URL, user);
  } catch (error) {
    console.log(error);
  }
}

const formAddUser = document.querySelector("#formAddUser");

formAddUser.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUser = getUserValues(formAddUser);
  addUser(newUser);
});

function getUserValues(element) {
  const name = element.querySelector("#inputName").value;
  const avatar = element.querySelector("#inputAvatar").value;
  const city = element.querySelector("#inputCity").value;

  const newUser = {
    name,
    avatar,
    city,
  };

  return newUser;
}

async function updateUser(id, userNewValues) {
  const response = await axios.put(`${URL}/${id}`, userNewValues);

  updateMessage.innerHTML = `<p class="successMessage">${response.data}</p>`;
}

const formUpdateUser = document.querySelector("#formUpdateUser");

formUpdateUser.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = formUpdateUser.querySelector("#inputId").value;
  const userNewValues = getUserValues(formUpdateUser);

  updateUser(id, userNewValues);
});

async function deleteUser(id) {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
}
