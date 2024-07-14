// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    return callOutCharge + costPerHour * numberOfHours;
};

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!";
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};

totalCost = function (callOutCharge, costPerHour, numberOfHours, discount = 0, isPercentage = false, taxRate = 0) {
    if (typeof callOutCharge !== 'number' || typeof costPerHour !== 'number' || typeof numberOfHours !== 'number' || typeof discount !== 'number' || typeof taxRate !== 'number') {
        throw new Error('All parameters must be numbers');
    }
    if (discount < 0) {
        throw new Error('Discount cannot be negative');
    }
    var subtotal = callOutCharge + costPerHour * numberOfHours;
    if (isPercentage) {
        discount = subtotal * (discount / 100);
    }
    return subtotal - discount + (subtotal - discount) * (taxRate / 100);
};

// Examples

console.log(getMessage());  // "I’m going on an adventure!"
console.log(getHelloTo("Dax"));  // "Hello to Dax"
console.log(getHelloTo("Alice"));  // "Hello to Alice"
console.log(getHelloTo("Bob"));  // "Hello to Bob"

console.log(sum(5, 10));  // 15
console.log(sum(100, 250));  // 350

console.log(totalCost(30, 40, 12));  // 510
console.log(totalCost(30, 40, 3, 20));  // 130
console.log(totalCost(30, 40, 3, 10, true));  // 117 (10% discount)
console.log(totalCost(30, 40, 3, 20, 10));  // 147 (10% tax)
console.log(totalCost(30, 40, 3, 0, false, 5));  // 157.5 (5% tax)


/* Further Adventures
 *
 * 1) Run the program.
 *
 * There is nothing logged to the console.
 * However, the functions will now be
 * available for calling.
 *
 * 2) At the console prompt, type
 *    getMessage()
 *    and press enter.
 *
 * The return value of the function is
 * logged to the console.
 *
 * 3) At the console prompt, type
 *    getHelloTo("Dax")
 *    and press enter.
 *
 * The argument, "Dax", forms part of the
 * return value.
 *
 * 4) Call the getHelloTo function
 *    with different arguments.
 *
 * 5) Call the sum and totalCost functions,
 *    using different arguments each time.
 *
 */