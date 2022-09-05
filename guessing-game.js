/* 

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/

//inputs: a number of your choosing between 1 and 100
//outputs: the number you input

let hint = document.getElementById('get');
let guesses = document.querySelectorAll('#guess');

let counter = 0;

// A winning number is generated between 1 - 100;
function winningNumGenerator() {
    let answer = Math.floor(Math.random() * 101);
    return answer;
}
let winningNum = winningNumGenerator();
//player inputs their guess in text input field and then submits their guess
let input = document.getElementById('guess-input');
let submit = document.getElementById('submit');
let playAgain = document.getElementById('play-again')

//If the number submitted is the winning number the player wins otherwise try again;
console.log(winningNum);

console.log(input);
submit.addEventListener('click', function(event) {
    event.preventDefault();
    
    if(input.value == winningNum) {
        console.log('here');
        hint.innerText = "YOU WIN";
    } else if(input.value < winningNum) {
        hint.innerText = "A little low there!"
        guesses[counter].innerText = input.value;
        counter++;
    } else if(input.value > winningNum){
        hint.innerText = "A little high there!";
        guesses[counter].innerText = input.value;
        counter++;
    } else {
        hint.innerText = "Not a number!";
    }

    if(counter === 5) {
        hint.innterText = 'YOU LOSE';
        return;
    }
});

playAgain.addEventListener('click', function(event) {
    document.location.reload(true);
})
    


    

//replace see how far you can get with HIGHER or LOWER

//gameOver function after 5 unsuccesful guesses