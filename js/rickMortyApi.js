const characters = "https://rickandmortyapi.com/api/character";

const getData = (rickMortyUrl) => {
     fetch(rickMortyUrl)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })

    .catch((error) => {
        console.log("error desde la api", error),
          alert("La api no esta disponible");
      });
};


const fillData = (jsonData) => { jsonData.results
let htmlCards = "";
   jsonData.results.forEach((e) => {
    console.log(jsonData)
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">'
    htmlCards += '<div class="card-body">';
    htmlCards += `<img src="${e.image}" class="card-img-top" alt= "">`
    htmlCards += `<h5 class="card-title">Name: ${e.name}</h5>`
    htmlCards += `<h5 class="card-title">Status in the series: ${e.status}</h5>`
    htmlCards += `<h5 class="card-title">Specie: ${e.species}</h5>`
    htmlCards += `<h5 class="card-title">Gender: ${e.gender}</h5>`
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";

  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};


getData(characters);

//`${jsonData.results}`

// jsonData.results, json.results

//