const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
// Find a intersection b
// Find a with b


// Find the union of a and b
const union = new Set([...a, ...b]);
console.log('Union of a and b:', Array.from(union));  // Output: [4, 5, 8, 9, 3, 7]

// Find the intersection of a and b
const intersection = a.filter(value => b.includes(value));
console.log('Intersection of a and b:', intersection);  // Output: [4, 5]

// Find the difference of a with b
const difference = a.filter(value => !b.includes(value));
console.log('Difference of a with b:', difference);  // Output: [8, 9]
