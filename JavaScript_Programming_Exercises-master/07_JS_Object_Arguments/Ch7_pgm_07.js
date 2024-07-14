// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);
var getBig = function (str) {
    return str.toUpperCase();
};

// Test the getBig function
console.log(getBig("Jupiter"));  
console.log(getBig("Saturn"));   
console.log(getBig("venus"));   
var getSmall = function (str) {
    return str.toLowerCase();
};

// Test the getSmall function
console.log(getSmall("Jupiter"));  
console.log(getSmall("Saturn"));   
console.log(getSmall("MARS"));     


/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */