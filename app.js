document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground-moving');
    const retryButton = document.querySelector('.retry-button'); // Get the "Retry" button element

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 3;
    let isGameOver = false;
    let gap = 430;

    // Function to reset the game
    function resetGame() {
        // Remove the "Retry" button
        gameDisplay.removeChild(retryButton);
        // Reset game variables
        birdLeft = 220;
        birdBottom = 100;
        isGameOver = false;
        // Reset bird position
        bird.style.bottom = birdBottom + 'px';
        bird.style left = birdLeft + 'px';
        // Start the game again
        gameTimerId = setInterval(startGame, 20);
        // Add an obstacle
        generateObstacle();
    }

    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px';

        // Check for game over
        if (birdBottom <= 0 || birdBottom >= (gameDisplay.clientHeight - bird.clientHeight)) {
            gameOver();
        }
    }

    function control(e) {
        if (e.keyCode === 32) {
            jump();
        }
    }

    function jump() {
        if (birdBottom < (gameDisplay.clientHeight - bird.clientHeight)) birdBottom += 50;
        bird.style.bottom = birdBottom + 'px';
    }

    document.addEventListener('keyup', control);

    let gameTimerId = setInterval(startGame, 20);

    function gameOver() {
        clearInterval(gameTimerId);
        console.log('Game Over');
        isGameOver = true;
        // Display the "Retry" button
        gameDisplay.appendChild(retryButton);
    }

    // Retry button click event
    retryButton.addEventListener('click', resetGame);

    function generateObstacle() {
        // Your obstacle generation code here
    }
});
