document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner le bouton et la popup
  var showPopupButton = document.getElementById('showPopupButton');
  var popup = document.getElementById('popup');
  var closeButton = document.getElementById('closeButton');

  // Afficher la popup lorsque le bouton est cliqué
  showPopupButton.addEventListener('click', function() {
    popup.style.display = 'block';
  });

  // Fermer le popup lorsque le bouton de fermeture est cliqué
  closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});
