let words = ["javascript", "monkey", "amazing", "pancake", "boy", "girl", "cat", "dog"];
let word = words[Math.floor(Math.random() * words.length)];
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let lives = 3;
while (remainingLetters > 0 && lives > 0) {
    //Show player progress
    alert(answerArray.join(" "));
    guess = prompt(`Guess a letter, or click Cancel to stop playing\n You have ${lives} lives left. `);            //Try to make a "Please select a letter with no loss of lives"
    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please guess a single letter only! ");
    } else {
        guess = guess.toLowerCase();
        let correctGuess = 0;
        for (let j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                if (answerArray[j] !== "_") {
                    alert("You have already guessed this letter " + guess);
                   correctGuess++;
                   break;
                } else {
                    answerArray[j] = guess;
                    correctGuess++;
                    remainingLetters--;
                }

            }
        } if (correctGuess === 0) {
            lives--;
        }
    }


};

//after while loop
if (guess === null) {
    alert("Sorry to see you leaving.\n The answer was " + word);
} else if (remainingLetters === 0) {

    alert("Congratulations! You guessed correctly");
} else {
    alert("You ran out of lives. The word is " + word);
}


