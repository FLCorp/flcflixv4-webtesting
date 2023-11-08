// script.js
const predefinedResults = {
  "Action": "films/action.html",
  "Black Adam": "films/action.html#blackAdam",
  "Black Adam VOSTFR": "films/action.html#blackAdamVOSTFR",
  "Bullet Train": "films/action.html#bulletTrain",
  "Bullet Train": "films/action.html#bulletTrain",
  "En Eaux Troubles": "films/action.html#meg",
  "En Eaux Très Troubles": "films/action.html#megTwo",
  "En Eaux Très Troubles VOSTFR": "films/action.html#megTwoVOSTFR",
  "Gran Turismo": "films/action.html#granTurismo",
  "Gran Turismo VOSTFR": "films/action.html#granTurismoVOSTFR",
  "Hunger Games": "films/action.html#hungerGames",
  "Hunger Games 2": "films/action.html#hungerGamesTwo",
  "Hunger Games 3": "films/action.html#hungerGamesThree",
  "Hunger Games 4": "films/action.html#hungerGamesFour",
  "John Wick": "films/action.html#johnWick",
  "John Wick 2": "films/action.html#johnWickTwo",
  "John Wick 3": "films/action.html#johnWickThree",
  "John Wick 4": "films/action.html#johnWickFour",
  "Les Trois Mousquetaires": "films/action.html#mousquetaires",
  "Men In Black": "films/action.html#mib",
  "MIB": "films/action.html#mib",
  "Men In Black 2": "films/action.html#mibTwo",
  "MIB 2": "films/action.html#mibTwo",
  "Men In Black 3": "films/action.html#mibThree",
  "MIB 3": "films/action.html#mibThree",
  "Men In Black Internationnal (4)": "films/action.html#mibFour",
  "MIB 4": "films/action.html#mibFour",
  "Tenet": "films/action.html#tenet",
  "Tetris": "films/action.html#tetris",
  "Top Gun": "films/action.html#topGun",
  "Top Gun Maverick": "films/action.html#topGunMaverick",
  "Top Gun Maverick VOSTFR": "films/action.html#topGunMaverickVOSTFR",
  };

  const searchInput = document.getElementById("search-input");
  const resultList = document.getElementById("result-list");
  
  // Fonction de recherche
  function search() {
    const searchTerm = searchInput.value;
    resultList.innerHTML = ""; // Efface les résultats actuels
  
    if (searchTerm.trim() === "") {
      return; // Ne rien afficher si la recherche est vide
    }
  
    for (const key in predefinedResults) {
      if (key.includes(searchTerm)) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = key;
        link.href = predefinedResults[key];
        li.appendChild(link);
        resultList.appendChild(li);
      }
    }
  }
  
  // Écouteur d'événement pour la recherche à chaque modification de l'entrée
  searchInput.addEventListener("input", search);