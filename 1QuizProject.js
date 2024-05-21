const prompt = require("prompt-sync")();

console.log("Welcome to the computer Hardware Quiz!")          

let correctAnswers = 0;
const totalQuestions = 5;

const answer1 = prompt("what is the 'brain' of a computer called? ");
const correctAnswer1 = "CPU";

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("That's right!")
    correctAnswers++;   
} else {
    console.log("Oops, that's wrong!")
}

const answer2 = prompt("What is the component of a PC that connects all other components together? ");
const correctAnswer2 = "MOTHERBOARD";

if (answer2.toUpperCase() === correctAnswer2) {
    console.log("That's right!")
    correctAnswers++;
} else {
    console.log("Oops, that's wrong!")
}

const answer3 = prompt("What is the component of a PC that handles graphical(images) processes? ");
const correctAnswer3 = "GPU";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("That's right!")
    correctAnswers++;
} else {
    console.log("Oops, that's wrong!")
}

const answer4 = prompt("What is the component of a PC that keeps currently-in-use data on standby? ");

const correctAnswer4 = "RAM";

if (answer4.toUpperCase() === correctAnswer4) {
    console.log("That's right!")
    correctAnswers++;
} else {
    console.log("Oops, that's wrong!")
}
const answer5 = prompt("What is the component of a PC that stores data permanently unlike RAM? ");

const correctanswer5 = "STORAGE DEVICE";

if (answer5.toUpperCase() === correctanswer5) {
    console.log("That's right!")
    correctAnswers++;
} else {
    console.log("Oops, that's wrong!")
}


const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("Well done! You scored", percent.toString() + "%.");

//console.log("well done! You scored", percent,"%."); This is what I previously used to display the result of the quiz, but there was a space between the int(perc) and the string. So, I used "tostring" in order to turn the int into a string which allows it to be added to the "%" string.// 
