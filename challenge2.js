// Overall goal: Given a collection of uppercase and lowercase letters, 
// create a new list that shows all letters in lowercase 

// Pseudocode: 
// Begin with a collection of uppercase and lowercase letters by assigning
// letters to a variable.
// For each letter in the collection, 
//      show all letters in lowercase.

// Final solution: 
var letters = [“s”, “T”, “o”, “R”, “Y”];

for (var i = 0; i < letters.length; i++) {
    console.log(letters[i].toLowerCase());
}
