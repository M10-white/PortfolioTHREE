const speechBubble = document.querySelector('.speech-bubble');
const textElement = speechBubble.querySelector('.text');

const dialogues = [
    "Je me demande parfois si...",
    "Si je suis à la hauteur...",
    "Si je peux vraiment protéger ceux qui me sont chers..."
];

const dialogues2 = [
    "Oh ! Euh...",
    "Bonjour ! Je ne t'avais pas vu.",
    "J'ai vraiment besoin d'aide !",
    "Ça fait plusieurs jours que j'ai perdu la trace de mes amies.",
    "Ils comptent énormément pour moi...",
    "J'ai trouvé une énigme pas loin de cet endroit qui m'aidera à les retrouver.",
    "Pourrais-tu m'aider ?"
];

const dialogues3 = [
    "Oh, merci infiniment !",
    "L'énigme se trouve par ici, suis-moi."
];

let currentIndex = 0;

function typeWriter(textElement, speed, dialogue) {
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < dialogue.length) {
            textElement.textContent += dialogue.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            currentIndex++;
            if (currentIndex < dialogues.length) {
                setTimeout(() => {
                    textElement.textContent = '';
                    typeWriter(textElement, 50, dialogues[currentIndex]);
                }, 1500);
            } else if (currentIndex === dialogues.length) {
                // Appliquer une animation d'opacité à la boîte de dialogue
                setTimeout(() => {
                speechBubble.style.transition = 'opacity 0.5s ease';
                speechBubble.style.opacity = '0';
            }, 1500);
            } else if (currentIndex < dialogues.length + dialogues2.length) {
                setTimeout(() => {
                    textElement.textContent = '';
                    typeWriter(textElement, 50, dialogues2[currentIndex - dialogues.length]);
                }, 1500);
            } else {
                // Tous les dialogues ont été affichés
            }
        }
    }, speed);
}

setTimeout(() => {
    speechBubble.style.display = 'block';
    typeWriter(textElement, 50, dialogues[currentIndex]);
}, 2000);

setTimeout(() => {
    const exclamation = document.querySelector('.exclamation');
    exclamation.style.display = 'block';
    setTimeout(() => {
        exclamation.style.opacity = '0';
    }, 500);
}, 12500);

setTimeout(() => {
    currentIndex = dialogues.length; // Passer aux dialogues 2
    speechBubble.style.opacity = '1'; // Assurer que la boîte de dialogue est visible
    speechBubble.style.display = 'block';
    textElement.textContent = '';
    typeWriter(textElement, 50, dialogues2[0]);
}, 14000);

setTimeout(() => {
    const ouiButton = document.getElementById('ouiButton');
    const nonButton = document.getElementById('nonButton');
    ouiButton.classList.remove('hidden');
    nonButton.classList.remove('hidden');
}, 37300);
