// Breaking a function by changing a variable name

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(msg);
};

showMessage();

// Initial Code with the Fix
var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
    console.log(msg); 
};

showMessage();  
// Further Adventures

// 1. Fixed Console Log
showMessage = function () {
    console.log(msg);  
};

showMessage();  // Output: "It's full of stars!"

// 2. Declare Another Message Variable and Assign It a Value
var newMsg = "The stars are beautiful!";

showMessage = function () {
    console.log(msg);
    console.log(newMsg);  // Log the new message
};

showMessage();

showMessage = function () {
    console.log(msg + " " + newMsg);  // Join the two messages
};

showMessage();  


/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */