// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

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

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();


var showPlayerPlace;
var showPlayerHealth;
var showPlayerStatus;
var updatePlayerHealth;
var movePlayer;



showPlayerPlace = function () {
    console.log(player.name + " is in " + player.place);
};

showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};

showPlayerStatus = function () {
    console.log(player.name + " is in " + player.place + " with health " + player.health);
};

updatePlayerHealth = function (newHealth) {
    player.health = newHealth;
};

movePlayer = function (newPlace) {
    player.place = newPlace;
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerPlace();
    showPlayerHealth();
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();
movePlayer("The Enchanted Forest");
updatePlayerHealth(60);
showPlayerStatus();

player = player2;
showPlayerInfo();
movePlayer("The Mystic Mountains");
updatePlayerHealth(35);
showPlayerStatus();


/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */