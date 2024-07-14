// Guess the number

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  }
};
guess(2);  // No output
guess(8);  // "Well done!"
guess(10); // No output
var secret = 8;

var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber === secret) {
    console.log("Well done!");
  }
};
var secret = 8;

var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber < secret) {
    console.log("Too low!");
  } else {
    console.log("Well done!");
  }
};
var secret = 8;

var guess = function (userNumber) {
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber < secret) {
    console.log("Too low!");
  } else {
    console.log("Well done!");
    // Code to prompt for a new game
    var newSecret = prompt("Guess the new secret number:");
    secret = Number(newSecret);
    console.log("New secret number is " + secret);
  }
};
var secret = 8;
var attempts = 0;
var maxAttempts = 3;

var guess = function (userNumber) {
  attempts++;
  if (userNumber > secret) {
    console.log("Too high!");
  } else if (userNumber < secret) {
    console.log("Too low!");
  } else {
    console.log("Well done!");
    secret = Math.floor(Math.random() * 10) + 1;  // New secret number
    attempts = 0;  // Reset attempts
  }
  if (attempts >= maxAttempts) {
    console.log("Game over! The secret number was " + secret);
    secret = Math.floor(Math.random() * 10) + 1;  // New secret number for the next game
    attempts = 0;  // Reset attempts
  }
};



/* Further Adventures
 *
 * 1) Click run.
 *
 * 2) Call the guess function at the prompt.
 *    e.g. guess(2)
 *
 * 3) Try a few different numbers as arguments.
 *
 * The program only prints "Well done!" when the
 * number you guess matches the secret number.
 *
 * The strict equality operator, ===, checks if
 * two values are equal.
 *
 * 4) Change the condition in parentheses to now
 *    check if the guess is greater than the secret.
 *
 *    if (userNumber > secret)
 *
 * 5) Change the message logged to "Too high!"
 *
 * 6) Run and test the updated program.
 *
 */