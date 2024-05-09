document.getElementById('start-button').addEventListener('click', function() {
    // Ajouter une classe à l'élément body pour déclencher l'animation de transition
    document.body.classList.add('page-transition');
    // Rediriger vers la deuxième page après un court délai
    setTimeout(function() {
        window.location.href = 'portfolio.html';
    }, 1000); // Temps en millisecondes pour l'animation
});