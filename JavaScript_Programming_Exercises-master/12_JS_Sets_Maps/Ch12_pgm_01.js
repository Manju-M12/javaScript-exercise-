const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country
// Task 1: Create an Empty Set
const emptySet = new Set();
console.log('Empty Set:', emptySet);

// Task 2: Create a Set Containing 0 to 10 Using a Loop
const set0to10 = new Set();
for (let i = 0; i <= 10; i++) {
    set0to10.add(i);
}
console.log('Set Containing 0 to 10:', set0to10);

// Task 3: Remove an Element from a Set
set0to10.delete(5);  // Remove the element 5 from the set
console.log('Set after removing 5:', set0to10);

// Task 4: Clear a Set
set0to10.clear();  // Remove all elements from the set
console.log('Set after clearing:', set0to10);

// Task 5: Create a Set of 5 String Elements from an Array

const countrySet = new Set(countries);
console.log('Set from Array:', countrySet);

// Task 6: Create a Map of Countries and Number of Characters of a Country
const countryMap = new Map();
countries.forEach(country => {
    countryMap.set(country, country.length);
});
console.log('Map of Countries and Number of Characters:', countryMap);
console.log('Does the Set contain 3?', set0to10.has(3));  // Output: true or false
console.log('Size of the Set:', set0to10.size);  // Output: 11
console.log('Number of characters in Sweden:', countryMap.get('Sweden'));  // Output: 6
console.log('Does the Map contain Finland?', countryMap.has('Finland'));  // Output: true
console.log('Size of the Map:', countryMap.size);  // Output: 3

