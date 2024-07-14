// Finding substrings

var message = "We choose to go to the Moon!";

console.log(message.substr(3, 12));
var message = "We choose to go to the Moon!";

console.log(message.substr(31, 5)); 
console.log(message.substr(16, 9)); 
console.log(message.substr(0, 9));   
// 2. Omitting the second argument
console.log(message.substr(3)); 
// 3. Using negative numbers as arguments
console.log(message.substr(-6, 5));  
console.log(message.substr(31, -1));  

/* Further Adventures
 *
 * 1) Use substr to log the following parts of
 *    the message string to the console:
 *
 *    > Moon!
 *    > go to the
 *    > We choose
 *
 * 2) Investigate what happens if you omit the
 *    second argument when calling substr.
 *
 * 3) What happens if you use negative numbers
 *    as arguments?
 *
 */