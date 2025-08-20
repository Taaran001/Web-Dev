const randomNum = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#quessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.result')
 
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (guess===0 || guess<0 || isNaN(guess) || guess>100) {
        alert('Please enter a valid number')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number is ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}

function endGame(){

}

function newGame(){

}
