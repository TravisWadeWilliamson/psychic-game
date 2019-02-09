// create an array of letters to use in the game

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'v', 'x', 'y', 'z'];

// undefined variable. Once the **** runs then the variable is defined, ie. a letter from the array.
var computerChooses;
var userGuessCounter = 8;
var winCounter = 0;
var lossCounter = 0; 
var userName = prompt('Padawon, enter your name.')  
var userGuessText = document.getElementById ("userguess-text");

// checking to see if js and html are linked
console.log(computerChoices.length); 

// *** computer randomly chooses a letter from the computerChoices array
function resetRandomNumFunction() {
    computerChooses = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChooses);
}
//this code invokes the function
resetRandomNumFunction();

// This will reset the counter for each match.
function resetCounters() {
    resetRandomNumFunction();
    userGuessCounter = 8;
}

//Alert at the start of the game.
// On button click start the game.
// startGame () {
    alert('Padawon ' + userName + ', you have 8 tries to reach into my mind.');
    alert('Open your mind. Relax. Let the force flow through you. Now choose your letter!');
// }




// create a function that is run when the user clicks on the start button.
document.onkeyup = function(event) {
    // determines which key the user pressed.
    var userGuess = event.key;
    console.log(userGuess);
    
    
    // if userGuess matches computer
    if (userGuess === computerChooses) {
        alert('You guessed ' + userGuess +'.');
        alert(' computer chose ' + computerChooses)
        alert('Padawon ' + userName + ', the force is strong in you!');
        alert('But be careful of your confidence. It will be your downfall if you do not control it.')
        confirm('Would you like to try again?')
        resetCounters();
    }
    // if userGuess does not match the computer
    else {
        // Tells the user that the guess was incorrect.
        userGuessText.textContent = 'Padawon ' + userName + ', you guessed ' + userGuess + '. That is not the letter I hold in my mind\'s eye!';
        
        // Tells the user how many chances remain.
        userGuessText.textContent = 'Padawon ' + userName + ', only ' + userGuessCounter + ' chances remain. Let go of your feelings... Reach out... Feeeeeeel the answer!';
        
        // This decreases the counter, which when zeros outs, should signify a match has been lost, add one to losses and reset the userGuessCounter to 5.
        userGuessCounter--;
        console.log(userGuessCounter)
        if ( userGuessCounter === 0) {
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

