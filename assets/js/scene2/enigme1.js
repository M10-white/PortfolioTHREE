document.addEventListener('DOMContentLoaded', () => {
    const symbolSequenceElement = document.getElementById('symbolSequence');
    
    // Liste des chemins d'images des symboles
    const symbolImages = [
        'assets/js/scene2/symbol1.png',
        'assets/js/scene2/symbol2.png',
        'assets/js/scene2/symbol3.png',
        'assets/js/scene2/symbol4.png'
    ];

    // Afficher chaque symbole dans la séquence
    symbolImages.forEach(symbolImage => {
        const symbolElement = document.createElement('img');
        symbolElement.src = symbolImage;
        symbolElement.classList.add('symbol');
        symbolSequenceElement.appendChild(symbolElement);
    });
});
