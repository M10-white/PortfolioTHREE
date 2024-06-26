document.addEventListener('DOMContentLoaded', () => {
const backgroundMusic = new Audio('assets/audio/index.mp3');
backgroundMusic.loop = true; 
backgroundMusic.play();

document.getElementById('start-button').addEventListener('click', function() {
    const boutonMusic = new Audio('assets/audio/boutonIndex.mp3');
    boutonMusic.play();

    // Ajouter une classe à l'élément body pour déclencher l'animation de transition
    document.body.classList.add('page-transition');
    // Rediriger vers la deuxième page après un court délai
    setTimeout(function() {
        window.location.href = 'vivi.html';
    }, 1000); // Temps en millisecondes pour l'animation
}); 
});

