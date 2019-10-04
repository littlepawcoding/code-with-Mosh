// JavaScript Operators

// Operators are used along side variable to create expressions
// There are several kinds:
// - arithmetic + - * / % ** ++ --
// - assignment = += -= *= /= %=
// - comparison
// - logical
// - bitwise

// Arithmetic operators - used to perform mathmatics

let x = 10;
let y = 5;

// + addition (plus symbol)
// - subrtration (minus or dash symbol)
// * multiplication (asterisk symbol)
// / division (slash symbol)
// % remainder of division or modulo (percentage symbol)
// ** x to the power of y or exponentiation
// ++ increment (plus one)
// -- decrement (minus one)

console.log(x + y); // 10 plus 5 // 15
console.log(x - y); // 10 minus 5 // 5
console.log(x * y); // 10 times 5 // 50
console.log(x / y); // 10 divided 5 // 2
console.log(x % y); // 10 modulo 5 // 0 (there is no remainder after division because it goes exactly)
console.log(x ** y); // 100000 not really sure about this one tbh
console.log(++x); // plus one to 10 BEFORE // 11
console.log(x++); // plus one to 10 AFTER // 10
// if you console.log again it would have added the extra one
console.log(x); //11
console.log(--x); // minus one to 10 BEFORE // 9
console.log(x--); // minus one to 10 AFTER // 10
// if you console.log again it would have removed the extra one
console.log(x); // 9

// Assignment operators - bascially the equals symbol =

// Used often as:
let z = 10;

// It's most often used with arithmatic operators when we want to add or minus more than one.
// ++ or -- won't work as that only changes by one
// instead we use plus equals +=

// This is the same as
console.log((z += 15)); // 10 plus 15 // 25
// this.
z = z + 15; // z = 10 + 15 // 25

// This is the same as
console.log((z *= 10)); // 10 times 10 // 100
// this.
z = z * 10; // z = 10 times 10 // 100
