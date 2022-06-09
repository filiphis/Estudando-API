const URL = "http://localhost:5501/api";

async function getUsers() {
  try {
    renderApp.innerHTML = "";
    const response = await axios.get(URL);
    const users = response.data.users;

    users.forEach(
      (user) =>
        (renderApp.innerHTML += `
    <p>${user.name}</p>
    <img width="100" src="${user.avatar}" />
    <p>${user.city}</p>
    `)
    );
  } catch (error) {
    console.log(error);
  }
}
