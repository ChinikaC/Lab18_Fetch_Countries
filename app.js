//1. Display information about a specific country
const getCountryByName = (countryName) => {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => data[0]);
}


//2. Population information about a country 
const displayCountryPopulation = (country) => {
    
    // The id of the <p> tag in the <section> in HTML, so the info about the country will appear here 
    // on the webpage and not inside the button
    const section = document.getElementById("country_population_info");
    // Create a h3 element so the info will be printed as a <h3> tag
    const name = document.createElement('h3');
    // So the population info is printed as a <p>
    const population = document.createElement('p');
    
    // Using .name.common means we can type the name of the country either using how the country's name is actually spelt
    // or using a common name for it and it will recognise which country it is and print out the information
    name.innerText = country.name.common;
   
    // This gets the population of the country and returns it using .innerText
    population.innerText = `Population: ${country.population}`;

    // This adds the name and population to the section created in the  HTML file 
    section.appendChild(name);
    section.appendChild(population);
}

// This adds an event listener to the button created in the HTML file so now when we click it, it will return the above information
// (name and population) of the country written in the brackets below
document.getElementById("country_info").addEventListener("click", () => {
    
    getCountryByName("US")
    .then(country => {
        displayCountryPopulation(country);
    })
});


//3. Return population information about all countries
const getAllCountries = () => {

   // New URL added in which has all the information for all countries
   // This ferches the countries from the URL
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(countries => {
        showAllCountries(countries);
    });
}

const showAllCountries = (countries) => {
   
    // This is the id for the whole <section> in the html file
    const section = document.getElementById("countries");
    // Creates an empty unordered list
    const ul = document.createElement('ul');
    // Adds the unordered list to the section
    section.appendChild(ul);

    // For every country, do the below
    countries.forEach(country => {
       
        // Create a list item
        const li = document.createElement('li');
       
        const name = document.createElement('h3');
        
        const population = document.createElement('p');
       
        name.innerText = country.name.common;
        population.innerText = `Population: ${country.population}`;
       
        // Adds the name and population to the list
        li.appendChild(name);
        li.appendChild(population);
        // Adds the list items (name and population) to the unordered list
        ul.appendChild(li);
    });
}


// Calls the getAllCountries function so all countries and their information is printed out
getAllCountries();