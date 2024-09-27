document.addEventListener('DOMContentLoaded', (event) => {

// Sélectionnez les boutons et la navbar
const whiteModeButton = document.getElementById("white-mode-button");
const darkModeButton = document.getElementById("dark-mode-button");
const navbar = document.querySelector(".navbar");

// Fonction pour basculer en mode sombre
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    localStorage.setItem('mode', 'dark');
  }
  
  // Fonction pour basculer en mode clair
  function enableLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('mode', 'light'); 
  }

// Écoutez les clics sur les boutons
whiteModeButton.addEventListener("click", enableLightMode);
darkModeButton.addEventListener("click", enableDarkMode);

// Au chargement de la page, vérifiez le mode enregistré
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  enableDarkMode();
} else {
  enableLightMode(); // Mode clair par défaut
}})
