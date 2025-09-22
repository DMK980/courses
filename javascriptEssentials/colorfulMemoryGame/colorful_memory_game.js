// initialization for arrays and variables 
const colors = ['red','blue','green','purple','orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0,timeLeft = 30,gameInterval;


// Dom elements selection
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards(){
    /* 
        function responsible for dynamically
        creating the card elements within the 
        game container based on the 'cards' array
        that holds color values for the cards.
    */
    for (const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array){
    /* 
        This funciton is responsible for 
        shuffling the elements of an array in random
        order
    */
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random()*(i + 1));
        [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
}

function handleCardClick(event){
    /*
        function manages the logic when a user 
        clisks the card in the memory match game
    */
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2){
        setTimeout(checkMatch,500);
    }
}

function checkMatch(){
    /*
        function evaluates whether the two selected
        cards match each other in the memory match 
        game
    */
    const [card1,card2]= selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    /*
        function is a pivotal part of initializing 
        and starting the memory match game
    */
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    /*
        function manages the game timer,
        updateing the displayed time and handling the 
        end of the game whent the timer reaches zero
    */
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}


// startbutton press listener
startbtn.addEventListener('click', startGame);