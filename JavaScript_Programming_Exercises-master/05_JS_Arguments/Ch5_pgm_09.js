// Displaying a player's health

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);

showPlayerHealth("Alice", 70);  // Output: Alice: health 70.
showPlayerHealth("Bob", 30);    // Output: Bob: health 30.
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    var healthInfo;
    healthInfo = playerName + ": health " + playerHealth + ".";
    console.log(healthInfo);
};

showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    // Declare the variable to hold the health info string
    var healthInfo;
    
    // Assign the formatted string to the healthInfo variable
    healthInfo = playerName + ": health " + playerHealth + ".";
    
    // Use the healthInfo variable in the console.log statement
    console.log(healthInfo);
};

// Test the function with different arguments
showPlayerHealth("Kandra", 50); // Output: Kandra: health 50.
showPlayerHealth("Dax", 40);    // Output: Dax: health 40.
showPlayerHealth("Alice", 70);  // Output: Alice: health 70.
showPlayerHealth("Bob", 30);    // Output: Bob: health 30.

/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    Kandra: health 50.
 *
 * 2) Call the showPlayerHealth function
 *    using your own arguments.
 *
 * 3) Declare a variable called healthInfo
 *    inside the showPlayerHealth function.
 *
 *    var healthInfo;
 *
 * 4) Assign healthInfo the string that
 *    will be displayed.
 *
 *    healthInfo = playerName + ": health " + playerHealth;
 *
 * 5) Change the call to console.log so that
 *    it uses the healthInfo variable.
 *
 */