// Passing information to a function

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");



// Further Adventures

// 1. Change the message in the parentheses
showMessage("JavaScript is awesome!");
showMessage("Let's learn more about functions.");
showMessage("Happy coding!");
showMessage("Keep practicing!");

// 2. Added Two More Calls
showMessage("JavaScript is awesome!");
showMessage("Let's learn more about functions.");
showMessage("Happy coding!");
showMessage("Keep practicing!");

// 3. Changed the Function to Add Extra Text
showMessage = function (message) {
    console.log("The message is: " + message + " Have a great day!");
};

showMessage("It's full of stars!");

// 4. Advanced Examples

// Example 1: Function with Multiple Parameters
var showFullMessage = function (greeting, name) {
    console.log(greeting + ", " + name + "!");
};

showFullMessage("Hello", "Alice");
showFullMessage("Good morning", "Bob");

// Example 2: Default Parameters in Functions
var showMessage = function (message = "Default message") {
    console.log("The message is: " + message);
};

showMessage();
showMessage("Custom message");

// Example 3: Returning Values from Functions
var createMessage = function (text) {
    return "The message is: " + text;
};

var msg = createMessage("JavaScript is fun!");
console.log(msg);

// Example 4: Function with Rest Parameters
var showMessages = function (...messages) {
    messages.forEach(msg => console.log(msg));
};

showMessages("Message 1", "Message 2", "Message 3");


/* Further Adventures
 *
 * 1) Change the message in the parentheses
 *    when showMessage is called on line 9.
 *
 * The value in the parentheses when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 9.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */