// Fonction pour charger dynamiquement le contenu de chaque page
function loadPage(page) {
  const contentDiv = document.getElementById("content");

  // Utiliser fetch pour charger dynamiquement le contenu de chaque page
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
    })
    .catch((error) => {
      contentDiv.innerHTML = "<p>Error loading page.</p>";
    });

  // Empêcher le rechargement de la page
  event.preventDefault();
}

// Charger la page par défaut (Home) au démarrage
window.onload = function () {
  loadPage("pages/home");
};
