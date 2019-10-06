// Do ... while loops

// Very similar to while loops execpt in while loops, if the condition is false, it prints nothing to the console (even though there is a console.log).
// With do...while loops, it will always return something to the console, even if the condition is false

// Another difference is that while loops have the condition at the start of the loop
// whereas do...while loops have the condition at the end

// Structure:

// loopVariable (or initialVariable);
// do {
//statement;
//incrementExpression;
// } while (condition);

let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

// the above prints 9
// the code runs the if statement and displays 9 because 9 is an odd number
// it then adds 1
// once it gets to the while condition it stops because 9 is not less than or equal to 5, which means its false, so the loop stops

let x = 9;
while (x <= 5) {
  if (x % 2 !== 0) console.log(x);
  x++;
}

// the above prints nothing
// straight away at the while condition 9 is not less than or equal to 5, which means is false
// because its false the if statement does not get executed
// therefore nothing prints
