/*STUFF THAT WORKS*/

/*Variables*/
var minField = document.getElementById('min');
var maxField = document.getElementById('max');
var guessButton = document.getElementById('guess-button');
var guessInput = document.getElementById('userguess');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');
var highLow = document.getElementById('highlow');
var lastGuess = document.getElementById('lastguess');
var enterValues = document.getElementById('enter-values');
var instructions = document.getElementById('instructions');
var scoring = document.getElementById('scoring');
var min = 0;
var max = 100;
var randomNumber = generateRandom(min, max);
console.log("top", randomNumber);
var score = 0;
var points = 100;
var currentPoints = document.getElementById('current-points');
var scoreKeeper = document.getElementById('score-keeper');

function generateRandom (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

enterValues.addEventListener('click', function (event) {
	event.preventDefault();
	min = parseInt(minField.value);
	max = parseInt(maxField.value);
	randomNumber = generateRandom(min, max);
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
	var guessSubmit = parseInt(guessInput.value);
	estimate (guessSubmit);
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
function estimate(guessSubmit) {
	console.log("guess before if submissions, ", guessSubmit);
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
		document.querySelector('.lastguess').innerText = guessSubmit;
		points -=10;
		currentPoints.innerText = points;
		console.log("HIGH points ", points);
	} else if (guessSubmit < randomNumber) {
		highLow.innerText = "That is too low";
		document.querySelector('.lastguess').innerText = guessSubmit;
		points -=10;
		currentPoints.innerText = points;
		console.log("LOW points ", points);
	} else {
		highLow.innerText = "BOOM!";
		document.querySelector('.lastguess').innerText = guessSubmit;
		score += points;
		points = 100;
		currentPoints.innerText = 100;
		console.log("score ", score);
		console.log("won points ", points);
		scoreKeeper.innerText = score;
		win();
	}
}

/*Disable Buttons on Win*/
function win() {
	randomNumber = generateRandom(min, max);
	console.log("win",randomNumber);
	max = parseInt(maxField.value) + 10;
	min = parseInt(minField.value) - 10;
	maxField.value = parseInt(maxField.value) + 10;
	minField.value = parseInt(minField.value) - 10;
	instructions.innerText = "You did it! Now a challenge... We've widened your range!"
	scoring.innerText = "Each time you guess incorrectly, you will lose 10 points. Your range is locked >:)"
	guessInput.setAttribute("placeholder", "Care to Guess?");
	guessInput.value = "";
	enterValues.setAttribute("disabled", "");
	minField.setAttribute("disabled", "");
	maxField.setAttribute("disabled", "");
}

/*Reset Button to Generate New Number on Click*/
function newNumber() {
	randomNumber = generateRandom(min, max);
	console.log("reset",randomNumber);
	min = 0;
	max = 100;
	score = 0;
	scoreKeeper.innerText = "-";
	console.log("reset score ", score);
	scoring.innerText = "Set a Range and We'll Pick a Random Number";
	points = 100;
	points.innerText = "100";
	console.log("reset points ", points);
	currentPoints.innerText = "100";
	maxField.value = 100;
	minField.value = 0;
	instructions.innerHTML = "Each time you guess incorrectly, you will lose 10 points.";
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
