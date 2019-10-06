// While loops

// Similar to for loops, execpt you declare the variable outside of the loop
// NOTE: that the i var outside the loop and the i var inside the loop are different variables
// this is to do with scope, which we'll learn later

// Structure

// initialVariable;
// while(condition) {
// statement;
// incrementExpression
//}

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
