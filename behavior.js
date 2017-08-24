/*STUFF THAT WORKS*/

/*Variables*/
var minField = document.getElementById('min');
var maxField = document.getElementById('max');
var guessButton = document.getElementById('GB');
var guessInput = document.getElementById('userguess');
var clearButton = document.getElementById('CB');
var resetButton = document.getElementById('reset');
var highLow = document.getElementById('highlow');
var lastGuess = document.getElementById('lastguess');
var enterValues = document.getElementById('enter-values');
var instructions = document.getElementById('instructions');
var min = 0;
var max = 100;
var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

enterValues.addEventListener('click', function (event) {
event.preventDefault();
min = parseInt(minField.value);
max = parseInt(maxField.value);
randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
})

/*Activate Buttons on Keyup(Initially Disabled)*/
guessInput.addEventListener('keyup', function () {
	guessButton.removeAttribute("disabled");
	clearButton.removeAttribute("disabled");
	resetButton.removeAttribute("disabled");
});

maxField.addEventListener('keyup', function() {
	enterValues.removeAttribute("disabled");
})

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
		highLow.innerText = "That number is higher than " + max + ". Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit < min) {
		highLow.innerText = "That number is lower than " + min + ". Try again!";
		lastGuess.innerText = ":(";
		guessInput.value = "";
		guessInput.setAttribute("placeholder", "Try again, grasshopper.");
	} else if (guessSubmit > randomNumber) {
		highLow.innerText = "That is too high";
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
	randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(randomNumber);
	max = parseInt(maxField.value) + 10;
	min = parseInt(minField.value) - 10;
	maxField.value = parseInt(maxField.value) + 10;
	minField.value = parseInt(minField.value) - 10;
	instructions.innerHTML = "<h3>You did it! Now a challenge... We've widened your range!</h3><div><sub>No Touching! >:)</sub></div>"
	guessInput.setAttribute("placeholder", "Care to Guess?");
	guessInput.value = "";
	enterValues.setAttribute("disabled", "");
	minField.setAttribute("disabled", "");
	maxField.setAttribute("disabled", "");
}

/*Reset Button to Generate New Number on Click*/
function newNumber() {
	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(randomNumber);
	min = 0;
	max = 100;
	maxField.value = "";
	minField.value = "";
	instructions.innerHTML = "Set a Range and We'll Pick a Random Number";
	lastGuess.innerText = "-";
	guessButton.setAttribute("disabled", "");
	clearButton.setAttribute("disabled", "");
	resetButton.setAttribute("disabled", "");
	guessInput.removeAttribute("disabled");
	guessInput.setAttribute("placeholder", "Care to Guess?");
	guessInput.value = "";
	highLow.innerText = "I'm waiting...";
}

/*SSSSSSSSSSTUFF THAT DOESN'T WORK... YETTTTTTTTTTTTT*/
