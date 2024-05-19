document.addEventListener('DOMContentLoaded', () => {
    const symbolSequenceElement = document.getElementById('symbolSequence');
    let activeSymbol = null;
    let offsetX = 0;
    let offsetY = 0;

    // Liste des chemins d'images des symboles
    const symbolImages = [
        'assets/js/scene2/symbol1.png',
        'assets/js/scene2/symbol2.png',
        'assets/js/scene2/symbol3.png',
        'assets/js/scene2/symbol4.png'
    ];

    // Afficher chaque symbole dans la séquence
    symbolImages.forEach((symbolImage, index) => {
        const symbolElement = document.createElement('img');
        symbolElement.src = symbolImage;
        symbolElement.classList.add('symbol');
        symbolElement.classList.add('symbol-' + index); // Ajouter une classe spécifique pour chaque symbole
        symbolSequenceElement.appendChild(symbolElement);

        // Ajouter des gestionnaires d'événements pour le glissement de la souris
        symbolElement.addEventListener('mousedown', (event) => {
            activeSymbol = symbolElement;

            // Calculer les offsets
            const rect = symbolElement.getBoundingClientRect();
            offsetX = event.clientX - rect.left;
            offsetY = event.clientY - rect.top;

            // Déplacer l'élément en fonction de la position de la souris
            const moveHandler = (e) => {
                if (activeSymbol) {
                    activeSymbol.style.position = 'absolute';
                    activeSymbol.style.left = `${e.clientX - offsetX - 390}px`;
                    activeSymbol.style.top = `${e.clientY - offsetY - 60}px`;
                }
            };

            // Ajouter un gestionnaire d'événements pour suivre le mouvement de la souris
            document.addEventListener('mousemove', moveHandler);

            // Supprimer le gestionnaire d'événements lorsque le bouton de la souris est relâché
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveHandler);
                activeSymbol = null;
            }, { once: true });
        });
    });
});
