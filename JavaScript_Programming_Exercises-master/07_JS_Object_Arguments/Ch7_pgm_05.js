// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);
var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);   // 3 is smaller than 12
showSmaller(-10, 3);  // -10 is smaller than 3
showSmaller(7, 7);    // 7 is smaller than 7 (same number)
showSmaller(0, -5);   // -5 is smaller than 0
showSmaller(1.5, 1.4);// 1.4 is smaller than 1.5
showSmaller(-3, -8);  // -8 is smaller than -3
var showLarger = function (num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);   // 12 is larger than 3
showLarger(-10, 3);  // 3 is larger than -10
showLarger(7, 7);    // 7 is larger than 7 (same number)
showLarger(0, -5);   // 0 is larger than -5
showLarger(1.5, 1.4);// 1.5 is larger than 1.4
showLarger(-3, -8);  // -3 is larger than -8
var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);
    console.log(smallest + " is the smallest of " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(12, 3, 7);     // 3 is the smallest of 12, 3, and 7
showSmallest(-10, 3, 7);   // -10 is the smallest of -10, 3, and 7
showSmallest(7, 7, 7);     // 7 is the smallest of 7, 7, and 7 (same number)
showSmallest(0, -5, 2);    // -5 is the smallest of 0, -5, and 2
showSmallest(1.5, 1.4, 1.6); // 1.4 is the smallest of 1.5, 1.4, and 1.6
showSmallest(-3, -8, -1);  // -8 is the smallest of -3, -8, and -1



/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */