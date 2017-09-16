var words = ["Walrus", "Seal", "Whale", "Urchin", "Shark", "Blowfish", "Sting Ray", "Orca", "Clownfish", "Breadfish"];

var randomWord = words[Math.floor(words.length * Math.random())];

var keyPressed = 0;

var wins = 0;

var guessesRemaining = 10;


function pickWord() {
	console.log(randomWord);
}

function makeUnderscores() {
	var underscoreDiv = document.getElementById("underscoreDiv");
	var underScoresString = "";
	for(i=0; i<randomWord.length; i++){
		underScoresString += "_ ";
	}
	underscoreDiv.innerHTML = underScoresString;
}

document.onkeyup = function(event) {
	var userInput = event.key;
	var underscoreDiv = document.getElementById("underscoreDiv");
	var underScoreArray = underscoreDiv.innerHTML.split(" ");//[_,l,o,w,f,i,s,h]
	var guessDiv = document.getElementById("guessNumber");
	var guessedLetter = document.getElementById("letterGuessed");
	
	// going through each index of random word. 
	// Checking to see if user input from key press corresponds to the correct indexes for that letter in the array.
	// if so you replace that index underscore with the letter that was pressed. 
	var foundMatch = false;
	for (var i=0; i<randomWord.length; i++) {
		if(getIndexesOfLetter(userInput).indexOf(i) > -1){
			underScoreArray[i] = userInput;
			foundMatch = true;
		}
	}
	if (!foundMatch) {
		guessesRemaining--;
		guessDiv.innerHTML = guessesRemaining;
	}

	if (guessesRemaining === 0) {
		alert("Game Over!");
		newWord();
		pickWord();
		resetGuesses();
		resetLetters();
	}

	letterGuessed.innerHTML += " " + userInput + " ,";

	// joins what's in underscoreArray with spaces so that it's one string, and then puts 
	// that string into underscoreDiv html 
	underscoreDiv.innerHTML = underScoreArray.join(" ");
	updateWin();

}

function updateWin() {
	var winsChange = document.getElementById("wins");
	if (document.getElementById("underscoreDiv").innerHTML.indexOf("_") == -1) {
		wins++;
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "breadfish") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/breadfish.png'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "walrus") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/walrus.gif'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "seal") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/seal.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "whale") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/whale.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "urchin") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/urchin.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "whale") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/whale.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "shark") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/shark.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "blowfish") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/blowfish.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "sting ray") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/stingray.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "orca") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/orca.jpg'>";
		}
		if (document.getElementById("underscoreDiv").innerHTML.replace(/ /g,"") == "clownfish") {
			document.getElementById("leftBox").innerHTML = "<img src = 'assets/images/clownfish.jpg'>";
		}
		newWord();
		pickWord();
		resetGuesses();
		resetLetters();
	}
	
	winsChange.innerHTML = wins;

}

function newWord() {
	var newRandomWord = words[Math.floor(words.length * Math.random())];

	randomWord = newRandomWord;

	makeUnderscores();
}

function resetGuesses() {
	guessesRemaining = 10;
	document.getElementById("guessNumber").innerHTML = guessesRemaining;
}

function resetLetters() {
	document.getElementById("letterGuessed").innerHTML = "Letters Already Guessed <br>";
}


// checks what index the letter is supposed to be at 
function getIndexesOfLetter(letter) {
	// declare an empty array to store every index where the letter appears
	var indicesOfLetterInRandomWord = [];
	// loops though each letter in whatever random word is chosen 
	for(i=0; i<randomWord.length; i++) {
		// checks to see if each letter is equal to the letter that is passed into the function (by a key press) then it pushes it to the correct spot in the array.
		if (randomWord[i].toLowerCase() == letter) {
			indicesOfLetterInRandomWord.push(i);
		}
	}

	// returns the array of matching indices. 
	return indicesOfLetterInRandomWord;
}


pickWord();

// createLines();

makeUnderscores();



console.log(getIndexesOfLetter());




