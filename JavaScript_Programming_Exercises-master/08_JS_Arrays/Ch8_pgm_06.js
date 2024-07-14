// Manipulating arrays with push, pop and join

var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

// Push another item onto the array
items.push("Machu Picchu");

// Log the updated array
console.log(items); // ["The Pyramids", "The Grand Canyon", "Machu Picchu"]
// Log the joined items
console.log(items.join(" and ")); // "The Pyramids and The Grand Canyon and Machu Picchu"
// Set one of the items using square brackets
items[2] = "The Taj Mahal";

// Log the updated array
console.log(items); // ["The Pyramids", "The Grand Canyon", "The Taj Mahal"]
// Push more than one item at a time
items.push("Eiffel Tower", "Great Wall of China");

// Log the updated array
console.log(items); // ["The Pyramids", "The Grand Canyon", "The Taj Mahal", "Eiffel Tower", "Great Wall of China"]

// Log the joined items
console.log(items.join(" and ")); // "The Pyramids and The Grand Canyon and The Taj Mahal and Eiffel Tower and Great Wall of China"

/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */