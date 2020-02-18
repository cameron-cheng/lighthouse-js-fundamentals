//IF Statements
//First Example
const raining = true;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//Second Example
const temperature = -130;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Logical Operators
//First Example
const isCitizen = true;
const age = 10;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Second Example
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//Third Example
if (!raining) {
  console.log("Leave your umbrella at home!");
}