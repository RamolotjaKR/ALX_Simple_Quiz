// Function to check the user's answer and display feedback
function checkAnswer() {
	// Identify the correct answer
	var correctAnswer = "4";
	// Retrieve the user's selected answer
	var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
	// Compare and display feedback
	if (userAnswer === correctAnswer) {
		document.getElementById("feedback").textContent = "Correct! Well done.";
	} else {
		document.getElementById("feedback").textContent = "That's incorrect. Try again!";
	}
}

// Add event listener to the Submit Answer button
var submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
