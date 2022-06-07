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

getUserDetails(2);
