"use strict";
var words = [
      "soundgarden",
      "nirvana"
    ];
var firstWord = words[0];
console.log(firstWord);
var firstWordString =  firstWord.split("");
console.log(firstWordString);
// var str = "How are you doing today?";
// var res = str.split(" ");
var firstWordLength = firstWord.length;
console.log(firstWordLength);
for(var i=0; i < words.length; i++) {
  var band = words[i].length
  console.log(band);

}

// Updates gameLetters in html
function outputGameLetters(){
  document.getElementById("gameLetters").innerHTML = words(gameLetters);
}

// Updates usedLetters in html
function outputUsedLetters(){
  document.getElementById("usedLetters").innerHTML = words(usedLetters);
}

// Has the user won?
function checkWin(){
  for(var i = 0; i < gameLetters.length; i++){
    if(gameLetters[i] === "_"){
      return false; // User still has letters to guess
    }
  }
  return true; // All letters have been guessed
}

// We need to have the correct number of _ per each div... the div we created, first div is called "word"

// div word pseudo code idea to create spaces for each word each time a letter is guessed



// // make an array of words that can be chosen for the Hangman game
// //how do I select different words?
// // how many letters are in each word?
// // how many guesses are involved for each word?
// // populate an array with underscores to help fill in the blanks for the words
  

// document.onkeyup = grungeEraSongs;

//     function grungeEraSongs() {
//         alert("Let the Hangman game begin!");
//     }
    


//    

//           if (letter === soundgarden) {
//             greeting = "correct letter";
//             console.log(letter);

//         } else{
//             greeting ="incorrect letter";
//         }

            

//     var letter = 11;

//   var counter = 0;

//     // Pick a random word

//     var word = words[Math.floor(Math.random() * words.length)];

//     // Set up the answer array

//     var answerArray = [];

//     for (var i = 0; i < word.length; i++) {

//       answerArray[i] = "_";

//     }

//     var soundgarden
       
//         iselelevenletters: true

//     var remainingLetters = word.length;

//     // The game loop

//     while (remainingLetters > 0) {

//       // Show the player their progress

//       alert(answerArray.join(" "));

//       // Get a guess from the player

//       var guess = prompt("Guess a letter, or click Cancel to stop playing.");

//       if (guess === null) {

//         // Exit the game loop

//         break;

//       } else if (guess.length !== 1) {

//         alert("Please enter a single letter.");

//       } else {

//         // Update the game state with the guess

//         for (var j = 0; j < word.length; j++) {

//           if (word[j] === guess) {

//             answerArray[j] = guess;

//             remainingLetters--;

//           }

//         }

//       }

//     // The end of the game loop

//     }

//     // Show the answer and congratulate the player


//     alert("Good job! The answer was soundgarden");
//          alert("Good job! The answer was nirvana");


          




