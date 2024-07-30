// Functions

// let ourFirstFunction = function() {
//     console.log("Hello world")
// }
// ourFirstFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// sayHelloTo("Rishen");
// sayHelloTo("Nick");

// function sayHelloTo(name){
//     alert(`Hello ${name}`)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// drawCats(1);
// function drawCats(howManyTimes){
//  for(let i = 0; i < howManyTimes; i++){
//     console.log(`I see ${i} =^.^=`)
//     }
// };
// drawCats(69);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// drawCats(4,"0^0");

// function drawCats(howManyTimes,whatToDraw){
//     for(let i = 0; i < howManyTimes; i++) { 
//         console.log(whatToDraw);
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function add(num1,num2,num3){
// console.log("sum =" + (num1 + num2 + num3));
// }
// add(69,69,69)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let question = prompt("Pick a number")
// alert("you get " + double(question));

// function double(number){                    //Make this into a calculator later
//     return number % prompt("Pick a percentage"); 


// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// function pickRandomWord(words){
//     return words[Math.floor(Math.random() * words.length)];

// }
// let random = ["Planet", "Worm", "Flower", "Computer"];
// alert(pickRandomWord(random));

// function pickRandomWord(words){
//     return words[Math.floor(Math.random() * words.length)];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// }
// function generateInsult() {
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];


// // Join all the random strings into a sentence:
// let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!"; 
// return randomString;
// };
// console.log(generateInsult())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function fifthLetter(fname){
//     if (fname.length < 5) {
//         return "No fifth letter";
//     }
//     return "The fifth letter of your name is " + fname[4] + ".";

// };
// console.log(fifthLetter("Nigga"));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function medalForScore(score){
    if (score < 3){
        return "Bronze";
    }
    if (score < 7){
        return "Sliver";
    }
    return "Gold"
}
function yourMedal(medal){
    return alert("You get " + medal);
}
alert(medalForScore(yourMedal()));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Question 1

// function add(sum1, sum2){
//     return (sum1 + sum2);  
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }
// console.log(add(multiply(36325,9824),777));  //blue() first then yellow().

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 2

// function areArraysSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;

//     }
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }

//     }
//     return true;

// }

// console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
// console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Question 3

// let words = ["javascript", "monkey", "amazing", "pancake", "boy", "girl"];
// let word = pickRandomWord();
// let answerArray = [];
// setupAnswerArray();

// let remainingLetters = word.length;
// let guess;
// let lives = 3;
// while (remainingLetters > 0 && lives > 0) {
//     //Show player progress
//     showPlayerProgress();
//     guess =  getGuess();  
//     if (guess === null) {
//         break;
//     } else if (guess.length > 1) {
//         alert("Please guess a single letter only! ");
//     } else {
//        let correctGuess = updateGameState();
//        remainingLetters -= correctGuess;
//     }


// }
// //after the loop
// showAnswerAndCongraulatePlayer();

// function pickRandomWord() {
//     return words[Math.floor(Math.random() * words.length)];

// }
// function setupAnswerArray() {
//     for (let i = 0; i < word.length; i++) {
//         answerArray[i] = "_";
//     }
  
// }
// function showPlayerProgress() {
//     alert(answerArray.join(" "));
    
// }
// function getGuess() {
//     return prompt(`Guess a letter, or click Cancel to stop playing\n You have ${lives} lives left. `);


// }
// function updateGameState() {
//     guess = guess.toLowerCase();
//     let correctGuess = 0;
//     for (let j = 0; j < word.length; j++) {
//         if (guess === word[j]) {
//             if (answerArray[j] !== "_") {
//                 alert("You have already guessed this letter " + guess);
//                 break;
//             } else {
//                 answerArray[j] = guess;
//                 correctGuess++;
    
//             }

//         }
//     } if (correctGuess === 0) {
//         lives--;
//     }
//     return correctGuess;
    
// }
// function showAnswerAndCongraulatePlayer() {
//     if (guess === null) {
//         alert("Sorry to see you leaving.\n The answer was " + word);
//     } else if (remainingLetters === 0) {

//         alert("Congratulations! You guessed correctly");
//     } else {
//         alert("You ran out of lives. The word is " + word);
//     }

// }

/////////////////////////////////////////////////////////////////////////////////////////////////


// console.log(number(1,2));
// (word("go","od"));



// function number(num1,num2){
//     return num1 + num2
     
// };
// function word(word1,word2){
//     console.log(word1 + word2);
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////


