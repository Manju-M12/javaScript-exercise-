// Using the arguments passed by forEach

var players;
var showArguments;

players = [ "Dax", "Jahver", "Kandra" ];

showArguments = function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
players.push("Ayla");
players.push("Tarek");

// Call the forEach method with the showArguments function
players.forEach(showArguments);
showArguments = function (item, index, wholeArray) {
  console.log("Item: " + wholeArray[index]);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
};

players.forEach(showArguments);
players.forEach(function (item, index, wholeArray) {
  console.log(`Player: ${item}, Length: ${item.length}`);
});
players.forEach(function (item, index, wholeArray) {
  if (item.length > 4) {
    console.log(item);
  }
});


/* Further Adventures
 *
 * 1) Add two more names to the players array.
 *
 * 2) Run the program.
 *
 * 3) Change the first console.log so
 *    it uses wholeArray and index
 *    to display the current item in
 *    the array. Don't use the item
 *    parameter.
 *
 */