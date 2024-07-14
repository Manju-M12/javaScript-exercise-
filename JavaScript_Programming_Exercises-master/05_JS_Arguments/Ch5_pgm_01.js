// Relying on a variable outside of the function

var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();

// Relying on a variable outside of the function

var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();
// Initial Code
var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
    console.log(message);
};

showMessage();  // Output: "It's full of stars!"

// Adventure 1: Change the message
message = "The universe is vast and mysterious!";
showMessage();  // Output: "The universe is vast and mysterious!"

// Adventure 2: Change the variable name in console.log
showMessage = function () {
    var msg = message;  // Creating a local variable 'msg'
    console.log(msg);  // Using 'msg' instead of 'message'
};

showMessage();  // Output: "The universe is vast and mysterious!"

// Adventure 3: Function relies on external variables
message = "The stars are beautiful!";
showMessage();  // Output: "The stars are beautiful!"

// Example 1: Function Closure and External Variables
function showMessage() {
    console.log(message);
}

message = "The stars are beautiful!";
showMessage();  // Output: "The stars are beautiful!"

// Example 2: Changing showMessage Function Behavior
var message = "It's full of stars!";
var showMessage = function (msg) {
    console.log(msg);  // Logs the passed argument
};

showMessage(message);  // Output: "It's full of stars!"

message = "The universe is vast!";
showMessage(message);  // Output: "The universe is vast!"

// Example 3: Using an Immediately Invoked Function Expression (IIFE)
(function () {
    var message = "It's full of stars!";
    console.log(message);
})();  // Output: "It's full of stars!"

// Example 4: Example with Lexical Scope
function createShowMessage(message) {
    return function () {
        console.log(message);
    };
}

var showMessage = createShowMessage("It's full of stars!");
showMessage();  // Output: "It's full of stars!"

var newMessage = createShowMessage("The stars are beautiful!");
newMessage();  // Output: "The stars are beautiful!"



/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */

/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */