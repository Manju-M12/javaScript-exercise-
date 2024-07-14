// Calling the same function with different arguments

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");


// Basic Function Definition


// Further Adventures

// 1. Change the function to display the message on a new line
showMessage = function (message) {
    console.log("The message is:\n" + message);
};

showMessage("It's full of stars!");

// 2. Declare a variable and assign a string value
var myMessage = "Welcome to the world of JavaScript!";
showMessage(myMessage);  // Calling the function with myMessage

// 3. Call the function with `myMessage` as the argument
showMessage(myMessage); 
// Additional Examples

// Example 1: Function with Optional Parameters
var showMessage = function (message, prefix = "Note:") {
    console.log(prefix + "\n" + message);
};

showMessage("This is an important message.");  // Uses default prefix
showMessage("This is another important message.", "Alert:");  // Custom prefix

// Example 2: Function with Multiple Parameters
var showFormattedMessage = function (message, sender, date) {
    console.log(`Message: ${message}\nSender: ${sender}\nDate: ${date}`);
};

showFormattedMessage("Don't forget the meeting!", "Alice", "2024-07-15");

// Example 3: Function Returning Values
var createGreeting = function (name) {
    return `Hello, ${name}!`;
};

var greeting = createGreeting("Bob");
console.log(greeting);  // Output: Hello, Bob!

// Example 4: Function with Rest Parameters
var displayMessages = function (...messages) {
    messages.forEach(msg => console.log(msg));
};

displayMessages("Message 1", "Message 2", "Message 3");

/* Further Adventures
 *
 * 1) Change the showMessage function to
 *    display its prefixed text on a
 *    separate line to the message.
 *
 * 2) Declare a myMessage variable and
 *    assign it a string value.
 *
 * 3) Call the showMessage function with
 *    myMessage as the argument.
 *
 */