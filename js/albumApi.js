const api = "https://jsonplaceholder.typicode.com/photos";

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
  for (let i = 0; i < 20; i++) {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<img src="${jsonData[i].url}" class="card-img-top" alt= ""`;
    htmlCards += `<h5 class="card-title">${jsonData[i].title}</h5>`; // interpolacion
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  }
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

getData(api);
