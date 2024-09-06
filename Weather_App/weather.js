let btn = document.getElementById("btn");
let input = document.getElementById("search-input");
let container = document.getElementById("container");
btn.addEventListener("click", () => {
    let city_name = input.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&lat=44.34&lon=10.99&units=metric&appid=f3d97d9bc75320eda7d24b6e292e30e6`;
    try {
    let fetchWeatherData = async () => {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
      if (response.status === 404) {
        alert("City not found");
        throw new Error("City not found");
      }

      container.innerHTML = `<div class="city-name info">
                                    <h1>${data.name}</h1>
                            </div>
                            <div class="temperature info">
                                     <h1>${data.main.temp} &deg;C</h1>
                            </div>
                            <div class="weather-condition info">
                                    <p>${data.weather[0].main}</p>
                            </div>

                            <div class="max-min">
                                  <div class="max-temp">
                                         <h3>Max </h3>
                                         <h5>${data.main.temp_max} &deg;C<h5>
                                  </div>
                                  <div class="min-temp">
                                         <h3>Min</h3>
                                         <h5>${data.main.temp_min} &deg;C<h5>
                                  </div>

                            </div>
                            <div class="info-box">
                                 <div class="feels-like info">
                                        <h2>${data.main.feels_like} &deg;C</h2>
                                        <p>Feels Like</p>
                                 </div>
                                <div class="humidity info">
                                        <h2>${data.main.humidity}%</h2>
                                        <p>Humidity</p>
                                </div>
                                <div class="wind-speed info">
                                        <h2>${data.wind.speed} MPH</h2>
                                        <p>Wind Speed</p>
                                </div>
                            </div>`;
    };

    fetchWeatherData();
  } catch (e) {
    console.error(e);
  }
});
