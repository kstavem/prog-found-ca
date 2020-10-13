// question 1
var myString = "This is my perfectly splendid string";

// question 2
var person = {
    firstName: "Kristian",
    age: 34,
};

// question 3
var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
};

// question 4
var fiveNumberArray = [3, 5, 8, 13, 21];

for (i = 0; i < fiveNumberArray.length; i++) {
    console.log(fiveNumberArray[i]);
};

// question 5
for (var counter = 15; counter < 26; counter++) {
    console.log(counter);
};

// question 6
for (var counter = 15; counter < 26; counter++) {
    if (counter === 20) {
        console.log(counter);
    };
};

// question 7
var questionSevenArray = [
    {
        menuItem: "human",
        legs: 2,
        nutritious: true,
    },
    {
        menuItem: "table",
        legs: 4,
        nutritious: false,
    }
];

for (i = 0; i < questionSevenArray.length; i++) {
    console.log(questionSevenArray[i].legs, questionSevenArray[i].nutritious);
};

// question 8
function whatIDontLike(loathe) {
    console.log("I don't like " + loathe);
};

whatIDontLike("orange white supremacists");

// question 9
function mySubtraction(a, b) {
    let result = a - b;
    console.log(result);
};

// question 10
var seeminglyEmpty = [];
function notEmptyAnymore(something) {
    seeminglyEmpty.push(something);
};

notEmptyAnymore("You've got mail!")
