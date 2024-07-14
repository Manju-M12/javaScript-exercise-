// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);


showSum(56, 74);   

// Function to display the product of two numbers
var showProduct;

showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

showProduct(3, 5);   // Output: The product is 15
showProduct(7, -2);  // Output: The product is -14
showProduct(0.5, 4); // Output: The product is 2
showProduct(2, 3);   // Output: The product is 6
showProduct(10, 10); // Output: The product is 100
showProduct(-4, 5);  // Output: The product is -20

// Function to display the difference between two numbers
var showDifference;

showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

showDifference(10, 5);   // Output: The difference is 5
showDifference(8, 15);   // Output: The difference is -7
showDifference(1.5, 0.5); // Output: The difference is 1

// Function to display the quotient of two numbers
var showQuotient;

showQuotient = function (number1, number2) {
    if (number2 !== 0) {
        var quotient = number1 / number2;
        console.log("The quotient is " + quotient);
    } else {
        console.log("Division by zero is not allowed.");
    }
};

showQuotient(10, 2);    
showQuotient(9, 3);     
showQuotient(7, 0);     


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */