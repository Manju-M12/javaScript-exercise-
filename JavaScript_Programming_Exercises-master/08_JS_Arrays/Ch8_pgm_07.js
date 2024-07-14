// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);
// Adding extra items to the array
items.push("Machu Picchu");
items[items.length] = "The Colosseum";

// Run the program again
items.forEach(showInfo); 
// Update the showInfo function
showInfo = function (itemToShow) {
  console.log(itemToShow + " has " + itemToShow.length + " letters.");
};

items.forEach(showInfo); 
// Function to find the total number of letters
var getTotalNumberOfLetters = function (array) {
  var totalLetters = 0;
  array.forEach(function (item) {
      totalLetters += item.length;
  });
  return totalLetters;
};

console.log("Total number of letters:", getTotalNumberOfLetters(items)); 
// Output: "Total number of letters: 59"



/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */