// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
  };
  
  console.log(line(30));
  console.log(line(40));
  console.log(line(50));
  var line = function (lineLength) {
    var line = "========================================";
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return line.substr(0, lineLength);
};

for (var i = -20; i <= 60; i += 10) {
    console.log("line(" + i + ") : [" + line(i) + "]");
}
var spaces = function (numberOfSpaces) {
  numberOfSpaces = Math.max(0, numberOfSpaces);
  numberOfSpaces = Math.min(40, numberOfSpaces);
  return " ".repeat(numberOfSpaces);
};

console.log("[" + spaces(10) + "]");  // 10 spaces
console.log("[" + spaces(20) + "]");  // 20 spaces
console.log("[" + spaces(30) + "]");  // 30 spaces
console.log("[" + spaces(50) + "]");  // constrained to 40 spaces
console.log("[" + spaces(-10) + "]"); // constrained to 0 spaces

var emptyBox = function (width) {
  width = Math.max(0, width);
  width = Math.min(40, width);

  var box = "";

  // Top border
  box += "=".repeat(width) + "\n";

  // Middle part
  for (var i = 0; i < 3; i++) {
      box += "=" + " ".repeat(width - 2) + "=" + "\n";
  }

  // Bottom border
  box += "=".repeat(width) + "\n";

  return box;
};

console.log(emptyBox(12));
console.log(emptyBox(5));
console.log(emptyBox(25));
console.log(emptyBox(50));
console.log(emptyBox(-5));

  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */