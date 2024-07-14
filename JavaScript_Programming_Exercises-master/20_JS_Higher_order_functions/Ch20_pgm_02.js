// Level 2

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// 1. Total Price of Products
const totalPrice = products
  .map(product => parseFloat(product.price))
  .filter(price => !isNaN(price))
  .reduce((total, price) => total + price, 0);

console.log(totalPrice);  // Logs: 27

// 2. Sum of Price of Products using Only Reduce
const sumOfPrices = products.reduce((total, product) => {
  const price = parseFloat(product.price);
  return !isNaN(price) ? total + price : total;
}, 0);

console.log(sumOfPrices);  // Logs: 27

// 3. Categorize Countries by Pattern
function categorizeCountries(pattern) {
  return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
}

console.log(categorizeCountries('land'));  // Logs: ['Finland', 'IceLand']

// 4. Count Letters Used as Initial
function letterFrequency() {
  return countries
    .map(country => country[0].toLowerCase())
    .reduce((count, letter) => {
      count[letter] = (count[letter] || 0) + 1;
      return count;
    }, {});
}

console.log(letterFrequency());  // Logs: { f: 1, s: 1, d: 1, n: 1, i: 1 }

// 5. Get First Ten Countries
function getFirstTenCountries() {
  return countries.slice(0, 10);
}

console.log(getFirstTenCountries());  // Logs: ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Iceland', 'Estonia', 'Latvia', 'Lithuania', 'Poland']

// 6. Get Last Ten Countries
function getLastTenCountries() {
  return countries.slice(-10);
}

console.log(getLastTenCountries());  // Logs: ['Iceland', 'Estonia', 'Latvia', 'Lithuania', 'Poland', 'Germany', 'Netherlands', 'Belgium']

// 7. Find Most Common Initial Letter
function mostCommonInitial() {
  return countries
    .map(country => country[0].toLowerCase())
    .reduce((freq, letter) => {
      freq[letter] = (freq[letter] || 0) + 1;
      return freq;
    }, {});
}

const initialCounts = mostCommonInitial();
const mostCommonLetter = Object.keys(initialCounts).reduce((a, b) => initialCounts[a] > initialCounts[b] ? a : b);

console.log(mostCommonLetter);  // Logs: 'f'


// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// 2. Find the sum of price of products using only reduce reduce(callback))
// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)