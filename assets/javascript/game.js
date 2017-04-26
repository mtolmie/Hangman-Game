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

    

        
 



