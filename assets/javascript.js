// create an array of letters to use in the game


var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'v', 'x', 'y', 'z'];

// undefined variable. Once the **** runs then the variable is defined, ie. a letter from the array.
var computerChooses;
var userGuessCounter = 8;
var userGuesses = [];
var winCounter = 0;
var lossCounter = 0;
var userName = prompt('Padawon, enter your name.')
var userIncorrectGuessText = document.getElementById("userincorrectguess-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var btnHidden = false;

// checking to see if js and html are linked
console.log(computerChoices.length);

// *** computer randomly chooses a letter from the computerChoices array
function resetRandomNumFunction() {
    computerChooses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChooses);
}
//this code invokes the function
resetRandomNumFunction();

// This will reset the counters for each match.
function resetCounters() {
    resetRandomNumFunction();
    userGuessCounter = 8;
    userGuesses = [];
    winCounter = 0;
    lossCounter = 0;
}


// On button click start the game.
function startGame() {
    userGuessText.textContent = 'Padawon ' + userName + ', have 8 tries to reach into my mind. Open your mind. Relax. Let the force flow between us. Now choose your letter!';
};

// s'posed to hide the start button, but it's NOT WORKING..... What I'd really like to happen would be that the start button turns into a class="fab fa-jedi-order" but since I can't even hide the damn button, the next step seems like a tall order....

function hideButton() {
    if (btnHidden === false) {
        document.getElementById('button').style.visibility = 'hidden';
    }
};

// create a function that is run when the user clicks on the start button.
document.onkeyup = function (event) {
    // determines which key the user pressed.
    var userGuess = event.key;
    console.log(userGuess);


    // if userGuess matches computer
    if (userGuess === computerChooses) {
        userGuessText.textContent = 'Padawon ' + userName + ', you guessed "' + userGuess + '". You are correct, but be careful of your confidence. It will lead you to the dark side, if you do not control it. Would you like to try again?';
        winCounter++;
        resetCounters();
    }
    // if userGuess does not match the computer
    else {
        // Tells the user that the guess was incorrect.
        userIncorrectGuessText.textContent = 'Padawon ' + userName + ', you guessed "' + userGuess + '". That is not the letter I hold in my mind\'s eye!';

        // Tells the user how many chances remain.
        userGuessText.textContent = 'Padawon ' + userName + ', only ' + (userGuessCounter-1) + ' chances remain. Let go of your feelings... Reach out... Feeeeeeel the answer!';

        
        // This decreases the counter, which when zeros outs, should signify a match has been lost, add one to losses and reset the userGuessCounter to 8. lossCounter isn't working....
        userGuessCounter--;
        console.log(userGuessCounter)
        if (userGuessCounter === 0) {
            lossesText.textContent = (lossCounter + 1);
            resetCounters();
        }
    };
}

    // this alerts how many tries you've had and how many are left
    // // need help with this ternary operator...
    // alert('you guessed ' + userGuessCounter++ ,(userGuessCounter = 1) ? 'time.' : 'times. You have ' + userGuessCounter--, (userGuessCounter = 1) ?  'try' : 'tries' + ' remaining');
    // if (userGuessCounter = 0) {
    // confirm('Do or do not. There is no try')

    // create function to hide button

