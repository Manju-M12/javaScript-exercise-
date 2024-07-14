// Guess the random number

var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
  };
  
  var guess = getGuesser();
  
  guess(2);  // Example of guessing the number
  guess(5);  // Try a few different numbers
  guess(8);  // Keep guessing until you get it right
  var getGuesser = function () {
    var secret = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
};
  
var guess = getGuesser();
guess(32);  // Test the new range
guess(45);  // Check if the number is within the new range
var between = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(between(1, 5));  // Random number between 1 and 5
console.log(between(100, 200));  // Random number between 100 and 200

  
  /* Further Adventures
   *
   * 1) Run the program.
   *
   * 2) Play the game a few times on the console.
   *    e.g. guess(2)
   *
   * 3) Change the code so the secret number is
   *    between 30 and 50.
   *
   * 4) Test your changes.
   *
   * CHALLENGE: Create a function called 'between'
   * that returns a random whole number between two
   * numbers passed as arguments.
   *
   * e.g. between(1, 5)      //   1 <= whole number <= 5
   *      between(100, 200)  // 100 <= whole number <= 200
   *
   */