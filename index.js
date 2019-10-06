// Conditional statements

// There are two types of conditional statements:
// - if ... else
// - switch ... case

// If else statements

// if (conditionIsTrue) {
//     statement executed
// } else if (secondConditionIsTrue) {
//     statement executed
// } else
//     otherwise statement executed

// Best explained in the example below.

// If hour between 6am and 12pm return good morning!
// Or if between 12pm and 6pm return good afternoon!
// Otherwise return good evening!

let hour = 10;

if (hour >= 6 && hour < 12) console.log("Good morning!");
// if 10 is greater or equal to 6 AND 10 is less than 12
// if true && true then display good morning
else if (hour >= 12 && hour <= 18) console.log("Good afternoon!");
// if 10 is greater than or equal to 12 AND 10 less than or equal to 18
// if true && true then display good afternoon
else console.log("Good evening!");
// otherwise display good evening

// && AND both have to be true to display true

// because statements are only one line we do not need the curly braces
// of more than one line add {}

// Switch case statements

// Similar to if .. else but may be a bit outdated
// These can be used to compare a value of a variable to another value

// let role;
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest user");
    break;

  case "admin":
    console.log("Admin user");
    break;

  default:
    console.log("Unknown user");
}
