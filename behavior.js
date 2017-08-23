/*STUFF THAT WORKS*/

/*Variables*/
var minField = document.getElementById('min');
var maxField = document.getElementById('max');
// var randomNumber = Math.floor(Math.random() * max + min);
// console.log(randomNumber);
var guessButton = document.getElementById('GB');
var guessInput = document.getElementById('userguess');
var clearButton = document.getElementById('CB');
var resetButton = document.getElementById('reset');
var highLow = document.getElementById('highlow');
var lastGuess = document.getElementById('lastguess');
var enterValues = document.getElementById('enter-values');

/*Activate Buttons on Keyup(Initially Disabled)*/
guessInput.addEventListener('keyup', function () {
	guessButton.removeAttribute("disabled");
	clearButton.removeAttribute("disabled");
	resetButton.removeAttribute("disabled");
});

/*Random Number Function*/
// function randomNumber () {
// 	randomNumber = Math.floor(Math.random() * maxField.value + minField.value);
// 	console.log(randomNumber);
// }

/*Buttons*/
var numNum = enterValues.addEventListener('click', function (event) {
	event.preventDefault();
	minField.value;
	maxField.value;
	var randomNumber = Math.floor(Math.random() * maxField.value + minField.value);
	console.log(randomNumber);
	return randomNumber;
})

guessButton.addEventListener('click', function (event) {
	event.preventDefault();
	estimate ();
});

clearButton.addEventListener('click', function (event) {
	event.preventDefault();
	guessInput.value = "";
})

resetButton.addEventListener('click', function (event) {
	event.preventDefault();
	newNumber();
})

/*Estimator for In and Out of Range Numbers*/
function estimate() {
	var guessSubmit = parseInt(guessInput.value);
	var currentGuess = guessInput.value;
	  if (isNaN(guessSubmit)) {
	  	highLow.innerText = "That's not even a number! Sneaky...";
	  	lastGuess.innerText = ">:|";
	  	guessInput.value = "";
	  	guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit > maxField.value) {
		highLow.innerText = "That number is higher than 100. Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit < minField.value) {
		highLow.innerText = "That number is lower than 1. Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit > numNum) {
		highlow.innerText = "That is too high";
		document.querySelector('.lastguess').innerText = currentGuess;
	} else if (guessSubmit < numNum) {
		highLow.innerText = "That is too low";
		document.querySelector('.lastguess').innerText = currentGuess;
	} else {
		highLow.innerText = "BOOM!";
		document.querySelector('.lastguess').innerText = currentGuess;
		win();
	}
}

/*Disable Buttons on Win*/
function win() {
	guessButton.setAttribute("disabled", "");
	clearButton.setAttribute("disabled", "");
	guessInput.setAttribute("disabled", "");
	guessInput.setAttribute("placeholder", "You did it!");
	guessInput.value = "";
}

/*Reset Button to Generate New Number on Click*/
function newNumber() {
	numNum = Math.floor(Math.random() * max + min);
	console.log(numNum);
	lastGuess.innerText = "-";
	guessButton.setAttribute("disabled", "");
	clearButton.setAttribute("disabled", "");
	resetButton.setAttribute("disabled", "");
	guessInput.removeAttribute("disabled");
	guessInput.setAttribute("placeholder", "Guess a Number 1-100!");
	guessInput.value = "";
	highLow.innerText = "I'm waiting...";
}

/*SSSSSSSSSSTUFF THAT DOESN'T WORK... YETTTTTTTTTTTTT*/

