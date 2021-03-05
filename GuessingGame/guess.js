var secret = Math.floor(Math.random() * 10) + 1;
var active = true;
var guessingButton = document.getElementById(guessingBtn);
guessingBtn.addEventListener("click", guessNumber);

function guessingButton() {
    guessNumber();
}

function guessNumber() {
    var answer = prompt("Please guess a number between 1 to 10");
    checkAnswer(answer);
}

function checkAnswer(guess) {
    while (active) {
        if (parseInt(guess) === secret) {
            alert("Congratulations! Your answer is correct.");
            active = false;
            reloadPage;
        } else if (parseInt(guess) > secret) {
            alert("Incorrect! Your guess is greater than the answer.");
            guessNumber();
        } else if (parseInt(guess) < secret) {
            alert("Incorrect! Your guess is smaller than the answer.")
            guessNumber();
        } else {
            alert("Invalid Input! Please enter a number")
            guessNumber();

        }
    }
}

function reloadpage() {
    window.location.reload();

}