// Practising arrays

let petList = ["Binki", "Kanga", "Dug"];

// please list out all the item within the array called petList
console.log(petList);
// please pick out the index number 2 from the list of arrays and display in the console
// remember, index starts from 0
console.log(petList[2]);

// binki = index 0
// kanga = index 1
// Dug = index 3

console.log(petList.length);

// BUT there are 3 items within the array

// please add another item to the array in index spot 3
// in this case index 3 is empty, so it will just add at the end of the array
// if the index was already occupied it would be replaced with a new value
petList[3] = "TBC";

console.log(petList);
console.log(petList[3]);

petList[3] = "Simba";

console.log(petList);
console.log(petList[3]);

// arrays can also hold a mixture of values like strings and numbers, separately or together
// this is called being dymanic
// note that numbers do not need ""
petList[4] = 7;

console.log(petList);
console.log(petList[4]);

// arrays are just objects in Javascript!
// usually objects are defined when use {}
// and arrays are defined when use []
// use typeof petList in the console and it'll tell you its an object
// arrays are objects which hold collections of data
// arrays are a data structure we use to store a list of items
