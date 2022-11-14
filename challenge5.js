// Overall goal: Given a collection of travel destinations, show a sentence 
// using the name of the destination, and show in alphabetical order.

// Pseudocode: 
// Begin with a collection of travel destinations by assigning places to a
// variable. 
// Sort the collection of destination in alphabetical order. 
// For every destination,
//      show a statement that includes the name of the destination.

var destinations = ["New York", "Paris", "Spain", "Denver", "California"];

var destinationsInOrder = destinations.sort();
console.log(destinationsInOrder);

for (var i = 0; i < destinationsInOrder.length; i++) {
  console.log(`I would love to visit ${destinationsInOrder[i]}!`)
}