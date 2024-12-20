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
    card.textContent = symbol; // Ajoute le symbole (sera masqué via CSS)


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
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
const sliderItems = document.querySelectorAll('.slider-item');

let currentIndex = 0;

let isDragging = false;
let startX
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('project-image')) return;
    isDragging = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
const stopDragging = () => {
    isDragging = false;
    slider.classList.remove('dragging');
}

document.addEventListener('mouseup', stopDragging);

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.classList.remove('dragging');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x-startX) * 2;
    slider.scrollLeft = scrollLeft-walk;
})
images.forEach(image => {
    image.addEventListener('mousedown', (e) => e.preventDefault());
})

function updateSlider() {
    const itemWidth = sliderItems[0].offsetWidth + 20; // Inclure l'espace entre les items
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Gestion de l'état des boutons
    prevButton.disabled = currentIndex === 0; // Désactiver "Précédent" si au début
    nextButton.disabled = currentIndex === sliderItems.length - 2; // Désactiver "Suivant" si à la fin
}

// Action pour le bouton "Précédent"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--; // Décrémente l'index
        updateSlider(); // Met à jour l'affichage
    }
});

// Action pour le bouton "Suivant"
nextButton.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - 1) {
        currentIndex++; // Incrémente l'index
        updateSlider(); // Met à jour l'affichage
    }
});

// Mise à jour initiale au chargement de la page
updateSlider();

// Ajuste le slider si la fenêtre est redimensionnée
window.addEventListener('resize', updateSlider);