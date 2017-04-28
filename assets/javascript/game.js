// make an array of words that can be chosen for the Hangman game
//how do I select different words?
// how many letters are in each word?
// how many guesses are involved for each word?
// populate an array with underscores to help fill in the blanks for the words
  

document.onkeyup = grungeEraSongs;

    function grungeEraSongs() {
        alert("Let the Hangman game begin!");
    }
    


    var words = [

      "soundgarden",

      "nirvana"

    ];

          if (letter === soundgarden) {
            greeting = "correct letter";
            console.log(letter);

        } else{
            greeting ="incorrect letter";
        }

            

    var letter = 11;

  var counter = 0;

    // Pick a random word

    var word = words[Math.floor(Math.random() * words.length)];

    // Set up the answer array

    var answerArray = [];

    for (var i = 0; i < word.length; i++) {

      answerArray[i] = "_";

    }

    var soundgarden
       
        iselelevenletters: true

    var remainingLetters = word.length;

    // The game loop

    while (remainingLetters > 0) {

      // Show the player their progress

      alert(answerArray.join(" "));

      // Get a guess from the player

      var guess = prompt("Guess a letter, or click Cancel to stop playing.");

      if (guess === null) {

        // Exit the game loop

        break;

      } else if (guess.length !== 1) {

        alert("Please enter a single letter.");

      } else {

        // Update the game state with the guess

        for (var j = 0; j < word.length; j++) {

          if (word[j] === guess) {

            answerArray[j] = guess;

            remainingLetters--;

          }

        }

      }

    // The end of the game loop

    }

    // Show the answer and congratulate the player


    alert("Good job! The answer was soundgarden");
         alert("Good job! The answer was nirvana");


          




