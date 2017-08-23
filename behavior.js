/*STUFF THAT WORKS*/

/*Variables*/
var min = 1;
var max = 100;
var randomNumber = Math.floor(Math.random() * max + min);
console.log(randomNumber);
var guessButton = document.getElementById('GB');
var guessInput = document.getElementById('userguess');
var clearButton = document.getElementById('CB');
var resetButton = document.getElementById('reset');
var highLow = document.getElementById('highlow');
var lastGuess = document.getElementById('lastguess')

/*Activate Buttons on Keyup(Initially Disabled)*/
guessInput.addEventListener('keyup', function () {
	guessButton.removeAttribute("disabled");
	clearButton.removeAttribute("disabled");
	resetButton.removeAttribute("disabled");
});

/*Buttons*/
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
	} else if (guessSubmit > max) {
		highLow.innerText = "That number is higher than 100. Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit < min) {
		highLow.innerText = "That number is lower than 1. Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit > randomNumber) {
		highlow.innerText = "That is too high";
		document.querySelector('.lastguess').innerText = currentGuess;
	} else if (guessSubmit < randomNumber) {
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
	randomNumber = Math.floor(Math.random() * max + min);
	console.log(randomNumber);
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

