const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Read the countries API using fetch and print the name of country, capital, languages, 
// population and area.


// Function to fetch data from the Countries API
const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();
    countries.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ')}`);
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area} km²`);
      console.log('--------------------------');
    });
  } catch (error) {
    console.error('Error fetching the countries data:', error);
  }
};

// Function to fetch data from the Cats API
const fetchCatsData = async () => {
  try {
    const response = await fetch(catsAPI);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const breeds = await response.json();
    breeds.forEach(breed => {
      console.log(`Breed: ${breed.name}`);
      console.log(`Origin: ${breed.origin}`);
      console.log(`Description: ${breed.description}`);
      console.log(`Temperament: ${breed.temperament}`);
      console.log('--------------------------');
    });
  } catch (error) {
    console.error('Error fetching the cats data:', error);
  }
};

// Call both functions
fetchCountriesData();
fetchCatsData();
