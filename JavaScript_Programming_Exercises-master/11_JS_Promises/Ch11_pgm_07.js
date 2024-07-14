const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the cats api and find the average weight of cat in metric unit.
// Read the countries api and find out the 10 largest countries
// Read the countries api and count total number of languages in the world used as officials.


// 1. Calculate average cat weight
const fetchAverageCatWeight = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const breeds = await response.json();
    const weightsInMetric = breeds.map(breed => {
      const [minWeight, maxWeight] = breed.weight.metric.split(' - ').map(weight => parseFloat(weight));
      return (minWeight + maxWeight) / 2;
    });
    const totalWeight = weightsInMetric.reduce((total, weight) => total + weight, 0);
    const averageWeight = totalWeight / weightsInMetric.length;
    console.log(`Average weight of cats in metric units: ${averageWeight.toFixed(2)} kg`);
    return averageWeight;
  } catch (error) {
    console.error('Error fetching the cats data:', error);
  }
};

// 2. Find the 10 largest countries by area
const fetchLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();
    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(country => ({
        name: country.name,
        area: country.area,
      }));
    console.log('The 10 largest countries by area:');
    largestCountries.forEach((country, index) => {
      console.log(`${index + 1}. ${country.name} - Area: ${country.area} km²`);
    });
    return largestCountries;
  } catch (error) {
    console.error('Error fetching the countries data:', error);
  }
};

// 3. Count the total number of unique official languages in the world
const countUniqueLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();
    const allLanguages = countries.flatMap(country => country.languages.map(language => language.name));
    const uniqueLanguages = new Set(allLanguages);
    console.log(`Total number of unique official languages in the world: ${uniqueLanguages.size}`);
    return uniqueLanguages.size;
  } catch (error) {
    console.error('Error fetching the countries data:', error);
  }
};

// Call the functions to perform all tasks
fetchAverageCatWeight();
fetchLargestCountries();
countUniqueLanguages();
