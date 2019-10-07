// For ... in loops

// Different from for, while and do-while because they repeat an action a number of times.
// A for-in loops over the properties of an object or elements of an array (though best not use for-in for arrays)

// For example, if you want to display all the properties of a person object, you can use a for-in loop

const person = {
  name: "Kat",
  age: 31
};

for (const key in person) {
  console.log(key, person[key]);
}

// so this is saying:
// for each property IN person, please store in a variable called key and then print key
// further to that, print out the data from each property

// . dot notation - person.name
// () brackets notation - person[name];
