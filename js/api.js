//function getData2 () {} // Funcion normal es igual de valida que la funcion flecha
// URL de la API de usuarios

const api = "https://jsonplaceholder.typicode.com/users";
const btnApiUsers = document.getElementById("apiUsers");
//  <button type="button" id="apiUsers" class="btn btn-primary">
// Ejecutar API
// </button>

// Obtener la informacion de la API
const getData = (apiUrl) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("error desde la api", error),
        alert("La api no esta disponible");
    });
};

const fillData = (jsonData) => {
  let htmlCards = "";
  console.log(jsonData);
  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`; // interpolacion
    htmlCards += `<h5 class="card-text">${e.email}</h5>`;
    htmlCards += `<h5 class="card-title">${e.address.city}</h5>`;
    htmlCards += `<h5 class="card-text">${e.phone}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

// Evento click
btnApiUsers.onclick = function () {
  getData(api);
};
