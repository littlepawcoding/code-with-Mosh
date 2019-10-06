// For loops

// used to repeat an action a number of times

// for (initialExpression; condition; incrementExpression) {
// statement;
//}

// 3 parts to a for loop:
// first need to declare the intial variable
// second create the loop - compare the value with the intial variable and choose how long to run it for
// third add increment - add (usually 1) to initial variable

// To print Hello world 5 times

for (i = 0; i < 5; i++) console.log("Hello world");

// i = index - most commonly used
// i = 0
// is i less than 5
// is 0 less than 5 - 0 is less than 5 so true
// it will execute the console.log hello world
// then i + 1
// 0 + 1 = 1
// the loop starts again, this time i = 1
// is 1 less than 5 - true
// prints console.log the 2nd time
// 1 + 1 = 2
// loop starts again - i = 2
// is 2 < 5 - true
// prints console.log 3rd time
// 2 + 1 = 3
// 3 < 5 - true
// prints console.log 4th time
// 3 + 1 = 4
// 4 < 5 - true
// prints the console.log 5th time
// 4 + 1 = 5
// 5 < 5 - false loop breaks and printing stops
