// Use the countries array to display all the countries. 


//See the design

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_countries_aray_day_2.2.png
const countries = [
    { name: 'United States', capital: 'Washington, D.C.', region: 'Americas', population: 331000000, flag: 'https://restcountries.com/v3.1/flags/us.svg' },
    { name: 'Canada', capital: 'Ottawa', region: 'Americas', population: 37700000, flag: 'https://restcountries.com/v3.1/flags/ca.svg' },
    { name: 'Australia', capital: 'Canberra', region: 'Oceania', population: 25000000, flag: 'https://restcountries.com/v3.1/flags/au.svg' },
    { name: 'Germany', capital: 'Berlin', region: 'Europe', population: 83700000, flag: 'https://restcountries.com/v3.1/flags/de.svg' },
    { name: 'Japan', capital: 'Tokyo', region: 'Asia', population: 126000000, flag: 'https://restcountries.com/v3.1/flags/jp.svg' },
    { name: 'Brazil', capital: 'Brasília', region: 'Americas', population: 212000000, flag: 'https://restcountries.com/v3.1/flags/br.svg' },
    // Add more countries as needed
];

function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'country-card';

    card.innerHTML = `
        <img src="${country.flag}" alt="${country.name}" style="width: 100px; height: auto;">
        <h2>${country.name}</h2>
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    `;

    return card;
}

function displayCountries() {
    const countriesList = document.getElementById('countriesList');
    countries.forEach(country => {
        const countryCard = createCountryCard(country);
        countriesList.appendChild(countryCard);
    });
}

displayCountries();
