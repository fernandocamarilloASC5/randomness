//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber() {
     const number = Math.floor(Math.random() * 21) + 1;
     console.log(number);
}
randomNumber();

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const decimal = Math.floor(Math.random() * 25) + 1;
    console.log(alphabet[decimal])
}
randomLetter();

function randomFoods() {
    const decimal2 = Math.floor(Math.random() * 5) + 1;
    console.log(foods[decimal2])
}

randomFoods();

function randomStudent() {
    
    const decimal3 = Math.floor(Math.random() * 6) + 1;
    console.log(students[decimal3])
}

randomStudent();

function randomGroup() {

}