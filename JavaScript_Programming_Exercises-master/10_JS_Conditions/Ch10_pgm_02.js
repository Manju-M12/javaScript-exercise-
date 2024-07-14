// Guess the number - the else clause

var secret = 8;

var guess = function (userNumber) {
  if (userNumber === secret) {
    console.log("Well done!");
  } else {
    console.log("Unlucky, try again.");
  }
};

guess(2);  // Logs "Unlucky, try again."
guess(8);  // Logs "Well done!"
guess(5);  // Logs "Unlucky, try again."
var secret = 8;

var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Unlucky, try again.");
  } else {
    console.log("Well done!");
  }
};
guess(2);  // Logs "Unlucky, try again."
guess(8);  // Logs "Well done!"
guess(5);  // Logs "Unlucky, try again."
var secret = 8;

var guess = function (userNumber) {
  if (userNumber !== secret) {
    console.log("Try again!");
  } else {
    console.log("Congratulations! You guessed it right!");
  }
};


/* Further Adventures
 *
 * 1) Run the program and try a few guesses at the prompt.
 *    e.g. guess(2)
 *
 * You can check if two values are NOT equal
 * by using the !== operator.
 *
 * 2) Change the condition in parentheses to check
 *    if the guess is not equal to the secret.
 *
 *    if (userNumber !== secret)
 *
 * 3) Run and test the updated program.
 *
 * 4) Change the messages to fit the new condition.
 *
 */