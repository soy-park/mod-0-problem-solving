// Overall goal: Beginning with a collection of words, filter out only the words
// that contain "ing."

// Pseudocode: 
// Begin with a collection of words, some with and without "ing."
// For every word in the array, 
//      if the word includes "ing"
//      show the word.
//      For other words that don't include "ing"
//      do nothing.

// Final solution: 

var words = ["biking", "dancing", "play", "eating", "run"];

for (var i = 0; i < words.length; i++) {
  if (words[i].includes("ing")) {
    console.log(words[i])
  }
}