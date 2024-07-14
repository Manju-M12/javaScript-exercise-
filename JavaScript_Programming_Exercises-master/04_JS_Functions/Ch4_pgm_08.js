// Displaying a menu

var displayMenu;

displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();

// Original function with added options
var displayMenu;

displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(3) View Profile");  // New option
    console.log("(4) Settings");     // New option
    console.log("(9) Quit");
};

// Call the original function
displayMenu();

// New function with a different set of menu options
var displayMyMenu = function () {
    console.log("Welcome to My Menu:");
    console.log("(A) Start Game");
    console.log("(B) View High Scores");
    console.log("(C) Help");
    console.log("(D) Exit");
};

// Call the new function
displayMyMenu();


/* Further Adventures
 *
 * 1) Add two more options to the displayMenu
 *    function and run the program.
 *
 * 2) Create your own displayMyMenu function.
 *
 * 3) Add a line to call your function as well.
 *    Run the program
 *
 */