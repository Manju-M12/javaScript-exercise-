// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[0] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");  // Output: K is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: D is in The Old Library
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[1] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");  // Output: a is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: a is in The Old Library
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[3] + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");  // Output: d is in The Dungeon of Doom
showPlayerPlace("Dax", "The Old Library");        // Output: undefined is in The Old Library


/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */