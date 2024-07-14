// The Fetch API provides an interface for fetching resources (including across the network).
// It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more
// powerful and flexible feature set. In this challenge we will use fetch to request url and APIS.
// In addition to that let us see demonstrate use case of promises in accessing network resources
// using the fetch API.

const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON data
  })
  .then((data) => {
    console.log(data); // Accessing the API data as JSON
  })
  .catch((error) => {
    console.error("Error fetching data:", error); // Handling errors
  });
const searchQuery = "USA";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
const postData = { name: "New Country", capital: "New Capital" };

fetch("https://example.com/api/countries", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    console.log("All countries:", countries);
    return fetch("https://api.thecatapi.com/v1/breeds");
  })
  .then((response) => response.json())
  .then((cats) => {
    console.log("All cat breeds:", cats);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
const findLargestCountry = async () => {
  try {
    const response = await fetch("https://restcountries.com/v2/all");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const countries = await response.json();
    const largestCountry = countries.reduce((max, country) => {
      return country.area > max.area ? country : max;
    });
    console.log(
      `The largest country by area is ${largestCountry.name} with an area of ${largestCountry.area} km²`
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

findLargestCountry();
