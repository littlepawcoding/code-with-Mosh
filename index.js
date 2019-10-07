// Break and continue keywords

// Keywords that can change how the loops behaves
// Break - jump out of a loop
// Continue - carry on with the loop within certain terms
// (Continue is considered old syntax and is regarded as 'ugy' code)

// normal while loop:
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
// prints 0 - 10

// using break:
let j = 0;
while (j <= 10) {
  if (j === 5) break;
  console.log(j);
  j++;
}
// prints 1 - 5 - breaks once loop 0 === 5

// using continue:
let k = 0;
while (k <= 10) {
  if (k % 2 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}
// prints 1, 3, 5, 7, 9 - continue if k is and odd number
