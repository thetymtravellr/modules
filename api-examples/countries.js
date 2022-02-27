const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data));
}

loadCountries();

const displayCountries = (countries) => {
    const countryContainer = document.getElementById('countries');
   countries.forEach(country => {
       if(country.region === 'Asia') {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
       
        <br/>
        <button onClick="loadCountryByName('${country.name.official}')">Show Details</button>
        `
        countryContainer.appendChild(div);
       }
   });
}

const loadCountryByName = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    const countryDetailDiv = document.getElementById('country-detail');
    countryDetailDiv.innerHTML = `
    <h5>${country.name.official}</h5>
    <p>${country.population}</p>
    <img src="${country.flags.png}" class="img" />
    `
}