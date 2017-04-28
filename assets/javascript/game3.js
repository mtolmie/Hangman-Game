<script>
var totalGuesses=5,blankChar="*";
var words=new Array("soundgarden","pearljam","nirvana");

var alreadyGuessed="-",inGame=false,curWord,numGuesses,totalGames=0,gamesWon=0;

function startGame(){
if(inGame&&!confirm("Are you sure you want to abort the current game?")){return;}
curWord=words[parseInt(Math.random()*words.length)].toUpperCase();
var image = curWord;


document.getElementById('image').innerHTML+='<img src=http://www.experts-exchange.com/images/pe/143475.jpg>'



var blanks=""
for(i=0;i<curWord.length;i++){blanks+=blankChar+" ";}
document.getElementById("curWord").innerHTML=blanks;
for(i=0;i<document.letters.elements.length;i++){
document.letters.elements[i].style.color="blue";

}

inGame=true;
alreadyGuessed="-";
document.getElementById("totalGuesses").innerHTML=totalGuesses;
numGuesses=0;
document.getElementById("numGuesses").innerHTML=numGuesses;
document.getElementById("leftGuesses").innerHTML=totalGuesses-numGuesses;
document.getElementById("score").innerHTML=gamesWon+" game(s) won out of a total of "+totalGames+" games.";

}

function guess(btn){
var char=btn.value;
if(alreadyGuessed.indexOf("-"+char+"-")!=-1){return;}
alreadyGuessed+=char+"-";
btn.style.color="6699ff";
btn.blur();
var curStr=document.getElementById("curWord").innerHTML.split(" ");
for(i=0;i<curWord.length;i++){
if(curWord.charAt(i)==char){
curStr[i]=char;
}
}
curStr=curStr.join(" ");
document.getElementById("curWord").innerHTML=curStr;
if(curWord.indexOf(char)==-1){
numGuesses++;
document.getElementById("numGuesses").innerHTML=numGuesses;
document.getElementById("leftGuesses").innerHTML=totalGuesses-numGuesses;
}
if(curStr.indexOf(blankChar)==-1){endGame(true);}
else if(numGuesses==totalGuesses){endGame(false);}
}

function endGame(won){
if(won){
alert("Congratulations! You've won the game!");
gamesWon++;
}else{
var showWord=confirm("Sorry, you've lost the game! Would you like to show the word?");
if(showWord){document.getElementById("curWord").innerHTML=curWord.split("").join(" ");alert("The word was "+curWord);}
}
for(i=0;i<document.letters.elements.length;i++){
document.letters.elements[i].style.color="6699ff";
}
inGame=false;
totalGames++;
document.getElementById("score").innerHTML=gamesWon+" game(s) won out of a total of "+totalGames+" games.";
}

</script>