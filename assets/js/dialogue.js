// Récupérez une référence vers le bouton "Suivant"
const nextButton = document.getElementById('nextButton');
// Récupérez une référence vers la boîte de dialogue
const speechBubble = document.querySelector('.speech-bubble');

// Créez un tableau de textes à afficher dans la boîte de dialogue
const dialogues = [
    "Bonjour ! Je suis le personnage.",
    "C'est un plaisir de vous rencontrer.",
    "J'espère que vous passez une bonne journée !"
];

let currentIndex = 0; // Initialisez l'index du texte actuel

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Suivant"
nextButton.addEventListener('click', function() {
    // Vérifiez s'il reste des textes à afficher
    if (currentIndex < dialogues.length - 1) {
        currentIndex++; // Passez au texte suivant
        // Mettez à jour le texte affiché dans la boîte de dialogue
        speechBubble.querySelector('.animated-text').textContent = dialogues[currentIndex];
    } else {
        // Cachez la boîte de dialogue et le bouton
        speechBubble.classList.add('hidden');
        // Désactivez le bouton "Suivant"
        nextButton.disabled = true;
    }
});

// Fonction pour afficher la boîte de dialogue et le bouton
function showSpeechBubble() {
    speechBubble.classList.remove('hidden');
    nextButton.disabled = false;
}

// Affichez la boîte de dialogue et le bouton lorsque le contenu de la page est chargé
document.addEventListener('DOMContentLoaded', showSpeechBubble);
