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