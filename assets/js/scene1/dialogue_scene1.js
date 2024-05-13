
const speechBubble = document.querySelector('.speech-bubble');
const textElement = speechBubble.querySelector('.text');
const nonButton = document.getElementById('nonButton');
const ouiButton = document.getElementById('ouiButton');
const backgroundMusic = new Audio('assets/audio/scene1.mp3');

backgroundMusic.loop = true; 
backgroundMusic.play();

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

const dialoguesBoutonHover = [
    "Mmh ?"
];

const dialoguesBoutonFinHover = [
    "Pourrais-tu m'aider ?"
];

const dialoguesBoutonOuiHover = [
    "C'est vrai ?"
];

let currentOuiHoverIndex = 0;
let currentHoverIndex = 0;
let currentFinHoverIndex = 0;
let currentIndex = 0;
let currentDialogues3= 0;

let typing = false; // Variable pour vérifier si la machine à écrire est en cours d'exécution

function typeWriter(textElement, speed, dialogue) {
    typing = true; // Mettre à jour l'état de typing
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < dialogue.length) {
            textElement.textContent += dialogue.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            currentIndex++;
            currentDialogues3++;
            if (currentIndex < dialogues.length) {
                setTimeout(() => {
                    textElement.textContent = '';
                    typeWriter(textElement, 50, dialogues[currentIndex]);
                }, 1500);
            } else if (currentDialogues3 < dialogues3.length) {
                setTimeout(() => {
                    textElement.textContent = ''; // Réinitialiser le texte
                    typeWriter(textElement, 50, dialogues3[currentDialogues3]); // Afficher la prochaine phrase de dialogues3
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
            typing = false; // Mettre à jour l'état de typing après l'exécution de la machine à écrire
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


document.addEventListener('DOMContentLoaded', () => {
const hoverSoundButtonNon = new Audio('assets/audio/boutonNon.mp3');
const hoverSoundButtonOui = new Audio('assets/audio/boutonOui.mp3');

nonButton.addEventListener('mouseover', () => {
    hoverSoundButtonNon.play();
    const changeMeshPositionEvent = new CustomEvent('changeMeshPosition', { detail: { x: 0, y: 0.80, z: 2.5 } });
    window.dispatchEvent(changeMeshPositionEvent);

    // Afficher le dialogue dialoguesBoutonHover
    if (!typing) { // Vérifier si la machine à écrire n'est pas déjà en cours d'exécution
        textElement.textContent = ''; // Réinitialiser le texte
        currentHoverIndex = 0; // Réinitialiser l'index du dialogue
        typeWriter(textElement, 30, dialoguesBoutonHover[currentHoverIndex]); // Afficher le dialogue correspondant au survol
    }
});

ouiButton.addEventListener('click', () => {
    hoverSoundButtonOui.play();
    ouiButton.style.display = 'none'; // Masquer le bouton "oui"
    nonButton.style.display = 'none'; // Masquer le bouton "non"

    textElement.textContent = ''; // Réinitialiser le texte
    currentDialogues3 = 0; // Réinitialiser l'index du dialogue
    typeWriter(textElement, 50, dialogues3[currentDialogues3]); // Afficher le dialogue dialogues3

    // Rediriger vers une autre page après l'affichage des dialogues de dialogues3
    setTimeout(() => {
        window.location.href = 'enigme1.html'; 
    }, (dialogues3[currentDialogues3].length * 50) + 4500); // Attendez la fin de l'affichage des dialogues de dialogues3 avant de rediriger
});

});

nonButton.addEventListener('mouseleave', () => {
    const changeMeshPositionEvent = new CustomEvent('changeMeshPositionInitial', { detail: { x: 0, y: 0, z: 0 } });
    window.dispatchEvent(changeMeshPositionEvent);

    // Afficher le dialogue dialoguesBoutonFinHover
    if (!typing) { // Vérifier si la machine à écrire n'est pas déjà en cours d'exécution
        textElement.textContent = ''; // Réinitialiser le texte
        currentFinHoverIndex = 0; // Réinitialiser l'index du dialogue
        typeWriter(textElement, 30, dialoguesBoutonFinHover[currentFinHoverIndex]); // Afficher le dialogue correspondant au survol
    }
});

ouiButton.addEventListener('mouseover', () => {
    // Afficher le dialogue dialoguesBoutonHover
    if (!typing) { // Vérifier si la machine à écrire n'est pas déjà en cours d'exécution
        textElement.textContent = ''; // Réinitialiser le texte
        currentOuiHoverIndex = 0; // Réinitialiser l'index du dialogue
        typeWriter(textElement, 30, dialoguesBoutonOuiHover[currentOuiHoverIndex]); // Afficher le dialogue correspondant au survol
    }
});

ouiButton.addEventListener('mouseleave', () => {
    // Afficher le dialogue dialoguesBoutonFinHover
    if (!typing) { // Vérifier si la machine à écrire n'est pas déjà en cours d'exécution
        textElement.textContent = ''; // Réinitialiser le texte
        currentFinHoverIndex = 0; // Réinitialiser l'index du dialogue
        typeWriter(textElement, 30, dialoguesBoutonFinHover[currentFinHoverIndex]); // Afficher le dialogue correspondant au survol
    }
});