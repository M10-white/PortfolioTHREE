
const speechBubble = document.querySelector('.speech-bubble');
const textElement = speechBubble.querySelector('.text');
const backgroundMusic = new Audio('assets/audio/scene2.mp3');

backgroundMusic.loop = true; 
backgroundMusic.play();

const dialogues = [
    "C'est ici",
    "Si je suis à la hauteur...",
    "Si je peux vraiment protéger ceux qui me sont chers..."
];
