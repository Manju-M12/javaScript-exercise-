// Displaying a player's name via an object property

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName.toUpperCase()); // Convert name to uppercase
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name); // Output: KANDRA
showPlayerName(player2.name); // Output: DAX
var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase()); // Convert name to lowercase
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name); // Output: kandra
showPlayerName(player2.name); // Output: dax


/* Further Adventures
 *
 * 1) In the showPlayerName function,
 *    change playerName to playerName.toUpperCase().
 *    Run the function.
 *
 * 2) Change the function to show the player's
 *    name in lower case.
 *
 */