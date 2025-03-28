// Liste des émojis (double chaque émoji pour créer des paires)
const emojis = ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🍍', '🥝'];
const symbols = [...emojis, ...emojis];

// Mélanger les émojis
symbols.sort(() => Math.random() - 0.5);

// Sélectionner le plateau de jeu
const gameBoard = document.getElementById('game-board');

// Créer les cartes
symbols.forEach((symbol) => {
    const card = document.createElement('div');
    card.classList.add('card', 'hidden'); // Commence avec la classe "hidden"
    card.dataset.symbol = symbol; // Stocke le symbole pour comparaison

    const emojiDiv = document.createElement('div');
    emojiDiv.style.fontSize = '2rem';
    emojiDiv.style.fontFamily = "'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif";
    emojiDiv.textContent = symbol; // Ajoute l'emoji dans la div
    card.appendChild(emojiDiv);

    gameBoard.appendChild(card);
});

// Logique du jeu
let firstCard = null;
let secondCard = null;
let lockBoard = false;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        if (lockBoard || card === firstCard || card.classList.contains('matched')) return;

        card.classList.remove('hidden'); // Révèle la carte
        card.classList.add('revealed'); // Change l'état à "revealed"

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;

            // Vérifie si c'est une paire
            if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
                firstCard.classList.remove('revealed');
                secondCard.classList.remove('revealed');
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                resetSelection();
            } else {
                // Cache les cartes après une courte pause
                setTimeout(() => {
                    firstCard.classList.add('hidden');
                    secondCard.classList.add('hidden');
                    firstCard.classList.remove('revealed');
                    secondCard.classList.remove('revealed');
                    resetSelection();
                }, 1000);
            }
        }
    });
});

// Réinitialise la sélection
function resetSelection() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const images = document.querySelectorAll('.slider-item > img');

let isDragging = false;
let startX = 0;
let scrollLeft = 0;

slider.addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.clientX;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';

    // Empêcher le comportement par défaut pour éviter les sélections de texte
    e.preventDefault();
});

const stopDragging = () => {
    isDragging = false;
    slider.style.cursor = 'grab';
};

slider.addEventListener('pointerup', stopDragging);
slider.addEventListener('pointerleave', stopDragging);

slider.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    
    // Calculer le déplacement instantanément
    const deltaX = e.clientX - startX;
    slider.scrollLeft = scrollLeft - deltaX;
});

// Empêcher le drag des images pour éviter les glitches
images.forEach(image => {
    image.addEventListener('pointerdown', (event) => event.preventDefault());
});

// Fonction de mise à jour du slider (corrigée)
function updateSlider() {
    if (sliderItems.length === 0) return; // Éviter les erreurs si aucun item n'est présent
    const itemWidth = sliderItems[0].offsetWidth + 20; // Inclure l'espace entre les items
    slider.scrollLeft = itemWidth * currentIndex;
}

// Ajuste le slider si la fenêtre est redimensionnée
window.addEventListener('resize', updateSlider);


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // Sélectionner toutes les sections

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Si la section est visible dans la fenêtre
            if (sectionTop < windowHeight - 150) {
                section.classList.add('visible'); // Ajouter la classe 'visible'
                section.classList.remove('sectionHidden'); // Supprimer la classe 'hidden'
            }
        });
    };

    // Lancer la détection du scroll
    window.addEventListener('scroll', revealSection);
    revealSection(); // Appel initial pour vérifier l'état des sections au chargement de la page
});
