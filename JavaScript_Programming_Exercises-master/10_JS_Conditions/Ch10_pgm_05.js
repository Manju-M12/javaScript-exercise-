// Higher or Lower

var getGuesser = function () {
    var secret = Math.floor(Math.random() * 10 + 1);
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        if (userNumber > secret) {
          return "Too high!";
        } else {
          return "Too low!";
        }
      }
    };
  };
  
  var guess = getGuesser();
  
  console.log(guess(5));  // Example of making a guess
console.log(guess(3));  // Try guessing different numbers
console.log(guess(7));  // Test various guesses
console.log(guess(2));
console.log(guess(8));
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      if (userNumber < secret) {  // Changed from > to <
        return "Too low!";
      } else {
        return "Too high!";
      }
    }
  };
};

var guess = getGuesser();
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else {
      if (userNumber < secret) {
        return "Too low!";
      } else {
        return "Too high!";
      }
    }
  };
};

var guess = getGuesser();
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else if (userNumber < secret) {
      return "Too low!";
    } else {
      return "Too high!";
    }
  };
};

var guess = getGuesser();
var getGuesser = function () {
  var secret = Math.floor(Math.random() * 10 + 1);

  return function (userNumber) {
    if (userNumber === secret) {
      return "Well done!";
    } else if (userNumber < secret) {
      return "Too low!";
    } else {
      return "Too high!";
    }
  };
};

var guess = getGuesser();

  
  /* Further Adventures
   *
   * 1) Run the program
   *
   * 2) Play the game a few times.
   *    e.g. guess(2)
   *
   * There are three blocks of code covering the
   * three outcomes for a guess:
   * too low, too high or correct.
   *
   * 3) Update the second condition to
   *    (userNumber < secret)
   *
   * 4) Update the messages to match the
   *    new condition.
   *
   * 5) Swap the first and second conditions so
   *    the second condition uses the strict
   *    equality operator.
   *
   * 6) Update the messages to match the
   *    new condition.
   *
   */