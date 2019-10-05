// // JavaScript Operators

// // Operators are used along side variable to create expressions
// // There are several kinds:
// // - arithmetic + - * / % ** ++ --
// // - assignment = += -= *= /= %=
// // - comparison ? :
// // - logical && || !
// // - bitwise

// // Arithmetic operators - used to perform mathmatics

// let x = 10;
// let y = 5;

// // + addition (plus symbol)
// // - subrtration (minus or dash symbol)
// // * multiplication (asterisk symbol)
// // / division (slash symbol)
// // % remainder of division or modulo (percentage symbol)
// // ** x to the power of y or exponentiation
// // ++ increment (plus one)
// // -- decrement (minus one)

// console.log(x + y); // 10 plus 5 // 15
// console.log(x - y); // 10 minus 5 // 5
// console.log(x * y); // 10 times 5 // 50
// console.log(x / y); // 10 divided 5 // 2
// console.log(x % y); // 10 modulo 5 // 0 (there is no remainder after division because it goes exactly)
// console.log(x ** y); // 100000 not really sure about this one tbh
// console.log(++x); // plus one to 10 BEFORE // 11
// console.log(x++); // plus one to 10 AFTER // 10
// // if you console.log again it would have added the extra one
// console.log(x); //11
// console.log(--x); // minus one to 10 BEFORE // 9
// console.log(x--); // minus one to 10 AFTER // 10
// // if you console.log again it would have removed the extra one
// console.log(x); // 9

// // Assignment operators - bascially the equals symbol =

// // Used often as:
// let z = 10;

// // It's most often used with arithmatic operators when we want to add or minus more than one.
// // ++ or -- won't work as that only changes by one
// // instead we use plus equals +=

// // This is the same as
// console.log((z += 15)); // 10 plus 15 // 25
// // this.
// z = z + 15; // z = 10 + 15 // 25

// // This is the same as
// console.log((z *= 10)); // 10 times 10 // 100
// // this.
// z = z * 10; // z = 10 times 10 // 100

// // Comparison operators - used to compare the value of a variable with another value

// // These always return a boolean - either true or false

// a = 1;

// // Relational operators
// // greater than >
// console.log(a > 0); // is 1 greater than 0 // true - 1 is greater than 0
// console.log(a >= 1); // is 1 greater than or equal to 1 // true - 1 is equal to 1
// console.log(a >= 2); // is 1 greater than or equal to 2 // false - 1 is not greater than 2
// // less than <
// console.log(a < 1); // is 1 less than 1 // false - 1 is not less than 1
// console.log(a <= 1); // is 1 less than or equal to 1 - true - 1 is equal to 1

// // Equality operators
// // strict equals
// console.log(a === 1); // is 1 strictly equal to 1 // true - 1 is equal to 1
// console.log(a === 0); // is 1 strictly equal to 0 // false - 1 is not equal to 0
// // not equals
// console.log(a !== 1); // is 1 not equals to 1 // false - 1 is equal to 1
// console.log(a !== 0); // is 1 not equals to 0 // true - 1 is not equals to 0

// // Further equality operators - strict and loose

// // === strict - needs to have both type and value to match
// // == loose - will convert the left to match the right and then only checks the value

console.log(1 === 1); // true
// // type tick - both are numbers
// // value tick - both are 1 so they equal each other
console.log("1" === 1); // false
// // type cross - the left is a string and the right a number so they do not equal
// // value cross - you can't compare a string to a number so this is irrelevant
console.log(1 == 1); // true
// // covert the left to match the right, but since they are the same it then checks the value
// // 1 is equal to 1 so it's ture
console.log("1" == 1); // true
// // converts the left to match the right so its actually "1" == "1" which means they match
// // 1 equals 1 so it's true

// // Ternary or conditional operators
// // If something is true then do this otherwise do that

// // If someone owns more than 10 crystals they are super awesome
// // If less than 10 crystals they are only awesome

let totalCrystals = 20;
let person = totalCrystals > 10 ? "super awesome" : "awesome";

console.log(person);

// // If totalCrystals (20) is greather than 10 then set person to super awesome otherwise they are just awesome

// // Logical operators - uses booleans

// // && AND - returns true if BOTH are true
// // || OR - returns true if one of the operands are true (doesn't matter which one)
// // ! NOT - returns the opposite

let highIncome = true;
let goodCredit = true;
let loan = highIncome && goodCredit;

console.log("Allowed loan? ", loan);

// // the above is saying, if a person has a high income and good credit they are allowed a loan
// // true && AND true BOTH are true so return true

let highIncome1 = true;
let goodCredit1 = false;
let loan1 = highIncome1 || goodCredit1;

console.log("Allowed loan? ", loan1);

// // true || OR false one is true so return true

let highIncome2 = true;
let goodCredit2 = false;
let loan2 = highIncome2 || goodCredit2;

console.log("Allowed loan? ", !loan2);

// // true || false returns true but NOT !loan returns the opposite which is false

// // Logical operators without booleans

// // you can use logical operators without returning a boolean, instead the values will be either truthy or falsy

// // Falsy - a value that uses the below will return falsy:
// // undefined
// // null
// // 0 (the number zero)
// // false (the boolean false - different to falsy)
// // "" (empty string)
// // NaN (not a number)

// // Truthy - bascially everything that is not falsy

// // Short-circuiting - once it finds the truthy value the expression stops, the rest is ignored

false || 1 || 2; // 1

let userColor = "pink";
let defaultColor = "yellow";
let color = userColor || defaultColor;

console.log(color);

// // OR || returns true if one is true, so if the user has selected a colour then it will return true otherwise it will return the default colour which is false

// // Bitwise - where we use decimals when it comes to numbers, computers use binary

// // not going to get into this now

// // One last thing to note is that operators use precedence within calcualtions.

console.log(2 + 3 * 4); // 14
// // 3 * 4 will be calculated first as * is higher than +

console.log(2 + 3 * 4); //14
// // like in maths, using parenthesis means the calculations will start within the () then outside
