const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


// How many languages are there in the countries object file.

// *** Use the countries data to find the 10 most spoken languages:


//    // Your output should look like this
//    console.log(mostSpokenLanguages(countries, 10))
//    [
//      { English: 91 },
//      { French: 45 },
//      { Arabic: 25 },
//      { Spanish: 24 },
//      { Russian: 9 },
//      { Portuguese: 9 },
//      { Dutch: 8 },
//      { German: 7 },
//      { Chinese: 5 },
//      { Swahili: 4 },
//      { Serbian: 4 }
//    ]

//   // Your output should look like this
//   console.log(mostSpokenLanguages(countries, 3))
//   [
//   {English:91},
//   {French:45},
//   {Arabic:25}
//   ]
const countries = [
    { name: 'Finland', languages: ['Finnish', 'Swedish'] },
    { name: 'Sweden', languages: ['Swedish', 'English'] },
    { name: 'Norway', languages: ['Norwegian', 'English'] },
    { name: 'France', languages: ['French'] },
    { name: 'Germany', languages: ['German'] },
    { name: 'United States', languages: ['English'] },
    { name: 'Canada', languages: ['English', 'French'] },
    { name: 'Brazil', languages: ['Portuguese'] },
    { name: 'South Africa', languages: ['English', 'Afrikaans'] },
    { name: 'Nigeria', languages: ['English', 'Hausa', 'Yoruba'] },
    { name: 'China', languages: ['Chinese'] },
    { name: 'Russia', languages: ['Russian'] },
    { name: 'Spain', languages: ['Spanish'] },
    { name: 'Argentina', languages: ['Spanish'] },
    { name: 'Egypt', languages: ['Arabic'] },
    { name: 'Kenya', languages: ['Swahili', 'English'] },
    { name: 'Netherlands', languages: ['Dutch'] },
    { name: 'Serbia', languages: ['Serbian'] },
    { name: 'Belgium', languages: ['Dutch', 'French', 'German'] },
    { name: 'Poland', languages: ['Polish'] }
];

// 1. Function to count the total number of languages
function countLanguages(countries) {
    const languageCount = new Map();
    
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount.has(language)) {
                languageCount.set(language, languageCount.get(language) + 1);
            } else {
                languageCount.set(language, 1);
            }
        });
    });
    
    return languageCount.size;
}

console.log('Number of languages in the countries object file:', countLanguages(countries));

// 2. Function to find the most spoken languages
function mostSpokenLanguages(countries, n) {
    const languageCount = new Map();
    
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount.has(language)) {
                languageCount.set(language, languageCount.get(language) + 1);
            } else {
                languageCount.set(language, 1);
            }
        });
    });
    
    // Convert map to array and sort by the number of occurrences in descending order
    const sortedLanguages = [...languageCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)  // Take the top `n` languages
        .map(([language, count]) => ({ [language]: count }));
    
    return sortedLanguages;
}

console.log(mostSpokenLanguages(countries, 10));


console.log(mostSpokenLanguages(countries, 3));

function countLanguages(countries) {
    const languageCount = new Map();
    
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount.has(language)) {
                languageCount.set(language, languageCount.get(language) + 1);
            } else {
                languageCount.set(language, 1);
            }
        });
    });
    
    return languageCount.size;
}
function mostSpokenLanguages(countries, n) {
    const languageCount = new Map();
    
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languageCount.has(language)) {
                languageCount.set(language, languageCount.get(language) + 1);
            } else {
                languageCount.set(language, 1);
            }
        });
    });
    
    // Convert map to array and sort by the number of occurrences in descending order
    const sortedLanguages = [...languageCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)  // Take the top `n` languages
        .map(([language, count]) => ({ [language]: count }));
    
    return sortedLanguages;
}
