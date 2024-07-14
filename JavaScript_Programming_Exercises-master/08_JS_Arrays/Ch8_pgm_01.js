// Creating arrays

var scores;
var names;

scores = [ 3, 1, 8, 2 ];
names = [ "Kandra", "Dax", "Blinky" ];

console.log(scores);
console.log(names);

// Add an extra element to the scores array
scores.push(5); // Adds the number 5 to the end of the scores array

// Add an extra element to the names array
names.push("Zara"); // Adds the name "Zara" to the end of the names array

// Log the updated arrays to the console
console.log(scores); // [3, 1, 8, 2, 5]
console.log(names);  // ["Kandra", "Dax", "Blinky", "Zara"]
var akaScores;
akaScores = scores;
console.log(akaScores); // [3, 1, 8, 2, 5]


/* Further Adventures
 *
 * 1) Add an extra element to each array.
 *
 * 2) Declare a third variable, akaScores.
 *
 * 3) Assign the scores array to akaScores.
 *    akaScores = scores
 *
 * 4) Log akaScores to the console.
 *
 */