// script.js
const predefinedResults = {
    "keyword_number_0": "page.html",
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