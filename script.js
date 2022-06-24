
let API_KEY = process.env.API_KEY


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;

  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  });
};


searchCity = () => {
  const city = document.getElementById("city-input").value;

  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
      console.log(response);
    })
    .catch((error) => {});
};


showWeatherData = (weatherData) => {
  
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].description;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
