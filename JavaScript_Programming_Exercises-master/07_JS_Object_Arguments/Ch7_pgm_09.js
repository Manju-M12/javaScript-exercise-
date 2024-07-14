// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

// 1. Find the index of the word 'go'
var startIndexGo = message.indexOf("go");
console.log("The index of 'go' is: " + startIndexGo);  // Outputs: 16

// 2. Display the word 'choose' from the message string
var startIndexChoose = message.indexOf("choose");
console.log(message.substr(startIndexChoose, 7));  // Outputs: "choose"

// 3. Find the last index of 'oo' in the word 'Moon'
var lastIndexOo = message.lastIndexOf("oo");
console.log("The last index of 'oo' is: " + lastIndexOo);  // Outputs: 29

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */