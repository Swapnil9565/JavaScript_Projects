let countryName = document.getElementById("country-name");
let capital = document.getElementById("capital");
let continent = document.getElementById("continent");
let currency = document.getElementById("currency");
let population = document.getElementById("population");
let language = document.getElementById("language");

let searchinput = document.getElementById("search-input");
let btn = document.getElementById("btn");
let img = document.querySelector("img");

btn.addEventListener("click", () => {
  let value = searchinput.value;
  let finalUrl = `https://restcountries.com/v3.1/name/${value}?fullText=true`;

  try {
    
    let fetchCountryInfo = async () => {
      let response = await fetch(finalUrl);
      let data = await response.json();
      console.log(response);
      console.log(data);

      if (response.status === 404) {
        alert("Please Enter valid country name");
        throw new Error("Page not found");
      }
      
      let newSrc = data[0].flags.png;
      img.src = newSrc;

      countryName.innerText = data[0].name.common;
      countryName.innerHTML = countryName.innerHTML.toUpperCase();
      capital.innerHTML = `<b>Capital:</b><span>${data[0].capital}</span>`;
      continent.innerHTML = `<b>Continent:</b><span>${data[0].continents}</span>`;
      currency.innerHTML = `<b>Currency:</b><span>${Object.keys(data[0].currencies)}</span>`;
      population.innerHTML = `<b>Population:</b><span>${data[0].population}</span>`;
      language.innerHTML = `<b>Language:</b><span>${Object.values(data[0].languages)}</span>`;
      language.innerHTML = language.innerHTML.toUpperCase();
    };

    fetchCountryInfo();

  } catch (e) {
    console.error(e);
  }
});
