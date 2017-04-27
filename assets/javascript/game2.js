// make an array of words that can be chosen for the Hangman game
//how do I select different words?
// how many letters are in each word?
// how many guesses are involved for each word?
// populate an array with underscores to help fill in the blanks for the words

document.onkeyup = function()  {
    var chosenWord = String.fromCharCode(event.keyCode).
            toLowerCase();

if (gameStarts === chosenWord){
    alert("Start game!");
}

function gameStringForm(arr){
    var result = "";

    for(var i = 0; i < arr.length; i++){
        result += arr[i];

        if(i != arr.length - 1){
            result += " ";
        }
    }

    return result;
}


var targetNumber = 11;
var options = ["soundgarden", "pearljam", "nirvana"];
var counter = 0;
$(".90image.jpeg").on("click", function() {

    counter += 10;

    console.log("your new score is: " + counter);
});

if (counter === targetNumber) {
    alert("You Win!");
}

var correctguess =(soundgarden);
if (soundgarden === true) {
 console.log('Burden in my hand');
}

function doOtherThings() {
    console.log("this is a console.log");
}

  // play song burden in my hand
} 

// Updates gameLetters in html
function outputGameLetters(){
    document.getElementById("gameLetters").innerHTML = gameStringForm(gameLetters);
}

// Updates usedLetters in html
function outputUsedLetters(){
    document.getElementById("usedLetters").innerHTML = gameStringForm(usedLetters);
}


/* choose a word */

var chosenWord =wordbank[Math.floor(Math.random()* wordBank.length)];

var chosenWord = ["soundgarden", "pearljam"];

console.log(wordBank);

document.onkeyup = function()  {
    var chosenWord = String.fromCharCode(event.keyCode).
            toLowerCase();

    

        


if(true && !!false || true)alert("Guess again ??");

/* Executed , here is the evaluation process-
true && !!false || true - becomes
true && false || true - (no brackets present , so ! evaluated ) becomes
false || true - (then && evaluated) which becomes true */
 


<script>
document.getElementById("demo").innerHTML = 5 * 10;
</script>

</body>
</html>