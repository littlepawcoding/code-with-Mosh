// Practising functions

// at this basic level there are two types of functions
// one that performs a task
// and one that calculates and returns a value

// this function is performing a task
// please display the content on the console

function petName(dogName) {
  console.log("Hello, my name is " + dogName + ". Woof!");
}

petName("Dug");
petName("Kanga");
petName("Binki");

// this function is returning a value
// please display the value of this action
// add + add

function number(add) {
  return add + add;
}

let addNumber = number(3);
console.log(addNumber);
// 6

// please print the function number which contains the action add + add
// the arguement that has been added is 5
// so I'm asking for 5 + 5
// this is also the shorter way of writing the above

console.log(number(5));
// 10

// there are two function calls above
// number(5) is a function call
// console.log() is a function call
