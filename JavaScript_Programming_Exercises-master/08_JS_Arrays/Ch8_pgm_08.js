// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

items.forEach(function (item) {
	console.log(" – " + item);
});

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

console.log("Dream destinations:");

// Display the number of places
console.log("Total number of places to visit: " + items.length);

// Use forEach to list each destination
items.forEach(function (item) {
    console.log(" – " + item);
});
var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

var showItems = function () {
    console.log("Dream destinations:");
    console.log("Total number of places to visit: " + items.length);
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

// Call the showItems function to display the items
showItems();
// In the console, type the following command:
showItems();
// Example commands to run in the console:

// Add a new destination
items.push("Machu Picchu");
showItems(); // Displays the updated array with the new destination

// Remove the last destination
items.pop();
showItems(); // Displays the updated array without the last destination

// Add multiple new destinations
items.push("The Eiffel Tower", "The Great Wall of China");
showItems(); // Displays the updated array with new destinations

// Remove the first destination
items.shift();
showItems(); // Displays the updated array without the first destination

// Add a new destination to the beginning
items.unshift("Statue of Liberty");
showItems(); // Displays the updated array with the new destination at the beginning


/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    places to visit as well as the places themselves.
 *
 * 2) Wrap the display code in a function
 *    and assign it to the showItems variable.
 *
 * 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 *
 * 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 *
 * You can press the up arrow when working at the
 * console prompt to show previous commands used.
 *
 */