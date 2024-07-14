// Getting strings for a player’s health and location

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));

var getPlayerHealth;
var getPlayerPlace;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

var showPlayerInfo = function (playerName, playerHealth, playerPlace, showHealth = true, showPlace = true, healthPrefix = "", healthSuffix = "", placePrefix = "", placeSuffix = "") {
    // Validate inputs
    if (typeof playerName !== 'string' || playerName.trim() === "") {
        throw new Error('Player name must be a non-empty string.');
    }
    if (typeof playerHealth !== 'number' || playerHealth < 0) {
        throw new Error('Player health must be a non-negative number.');
    }
    if (typeof playerPlace !== 'string' || playerPlace.trim() === "") {
        throw new Error('Player place must be a non-empty string.');
    }

    // Show health information
    if (showHealth) {
        console.log(healthPrefix + getPlayerHealth(playerName, playerHealth) + healthSuffix);
    }
    // Show place information
    if (showPlace) {
        console.log(placePrefix + getPlayerPlace(playerName, playerPlace) + placeSuffix);
    }
};

// New feature: Function to get player status
var getPlayerStatus = function (playerName, playerHealth, playerPlace) {
    return `${playerName} has ${playerHealth} health and is in ${playerPlace}.`;
};

// Examples of using the functions

console.log(getPlayerHealth("Kandra", 50));  
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));  

showPlayerInfo("Dax", 50, "The Bath");  
showPlayerInfo("Dax", 50, "The Bath", false);  
showPlayerInfo("Dax", 50, "The Bath", true, false);  

showPlayerInfo("Dax", 50, "The Bath", true, true, "Health: ", " HP", "Location: ", ""); 


showPlayerInfo("Dax", 50, "The Bath", true, false, "HP: ", "", "", "!!!");


try {
    showPlayerInfo("Dax", 50, "The Bath");
    showPlayerInfo("Dax", -10, "The Bath");  
} catch (error) {
    console.error(error.message);
}

console.log(getPlayerStatus("Kandra", 50, "The Dungeon of Doom"));  
// Output: Kandra has 50 health and is in The Dungeon of Doom.


/* Further Adventures
 *
 * 1) Create a showPlayerInfo function with three
 *    parameters, playerName, playerHealth and
 *    playerPlace.
 *
 * 2) Call getPlayerHealth and getPlayerPlace
 *    from your new showPlayerInfo function.
 *
 *    e.g. showPlayerInfo("Dax", 50, "The Bath")
 *    should produce the output
 *
 *    Dax has health 50
 *    Dax is in The Bath
 *
 */