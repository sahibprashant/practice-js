document.addEventListener('DOMContentLoaded', function () {
    const cardArray = [
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        }
    ]

    cardArray.sort((a, b) => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    // const score = document.querySelector('#score');
    // let gameScore = 0;
    let flippedCards = [];
    let cardsWon = [];

    function createBoard() {
        cardArray.forEach((item, index) => {
            const card = document.createElement('img');
            card.setAttribute('src', "./images/blank.png");
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        })
    }

    function flipcard() {
        const cardId = this.getAttribute('data-id');
        const cardFlipped = cardArray[cardId];
        this.setAttribute('src', cardFlipped.img);
        flippedCards.push({
            id : cardId,
            name : cardFlipped.name,
        })
        if(flippedCards.length === 2){
            setTimeout(() => {
                evaluateGame();
            }, 1000);
        }
    }

    function evaluateGame() {
        const cards = document.querySelectorAll("img");
        const card1 = cards[flippedCards[0].id];
        const card2 = cards[flippedCards[1].id];

        if(flippedCards[0].id === flippedCards[1].id){
            alert("Same card clicked twice! You lost!");
            card1.setAttribute('src', "./images/blank.png");
            card2.setAttribute('src', "./images/blank.png");
        }else if(flippedCards[0].name !== flippedCards[1].name){
            alert("Cards not matched! Try Again!");
            card1.setAttribute('src', "./images/blank.png");
            card2.setAttribute('src', "./images/blank.png");
        }else {
            alert("Cards Matched!!");
            card1.setAttribute('src', "./images/white.png");
            card2.setAttribute('src', "./images/white.png");
            card1.removeEventListener('click', flipcard);
            card2.removeEventListener('click', flipcard);
            cardsWon.push(flippedCards[0].name);
        }
        
        flippedCards = [];
        if(cardsWon.length*2 === cardArray.length){
            alert("Game Won!!");
        }
    }
    createBoard();
});