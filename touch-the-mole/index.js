document.addEventListener('DOMContentLoaded', function () {

    const timer = document.querySelector('.timer');
    const score = document.querySelector('.score');
    const grid = document.querySelector('.grid');
    const squares = document.querySelectorAll('.square');
    const gameBtn = document.querySelector('.gameButton');

    let timeLeft = 15;
    timer.textContent = timeLeft;
    let gameScore = 0, isGameOver = false;
    let countdownInterval, moleInterval;

    squares.forEach((sq) => {
        sq.addEventListener('mousedown', () => {
            if (sq.classList.contains('mole') && !isGameOver) {
                gameScore += 1;
                score.textContent = gameScore;
            }
        });
    });

    gameBtn.addEventListener('click', function () {
        startGame();
    });

    function changeMolePosition() {
        let lastPosition = Math.floor(Math.random(0) * 9);

        return function () {
            if (squares[lastPosition].classList.contains("mole"))
                squares[lastPosition].classList.remove('mole');

            lastPosition = Math.floor(Math.random(0) * 9);  //random between 0 to 8, index will be 0-8
            console.log(lastPosition);
            squares[lastPosition].classList.add('mole');
        }
    }

    const molePosition = changeMolePosition();
    const moveMole = function () {
        return setInterval(() => {
            molePosition()
        }, 700);
    }



    const gameCountdown = function () {
        return setInterval(() => {
            updateTime();
        }, 1000);
    }

    function updateTime() {
        if (timeLeft === 0) {
            //game over!
            isGameOver = true;
            gameBtn.removeAttribute('disabled');
            gameBtn.textContent = "Restart!";
            clearInterval(moleInterval);
            clearInterval(countdownInterval);
            return;
        }
        timeLeft -= 1;
        timer.textContent = timeLeft;
    }

    function startGame() {
        isGameOver = false;
        timeLeft = 15;
        gameScore = 0;
        score.textContent = gameScore;
        moleInterval = moveMole();
        countdownInterval = gameCountdown();
        gameBtn.setAttribute('disabled', true);
        gameBtn.textContent = "Game ON!"
    }
});