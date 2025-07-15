document.addEventListener("DOMContentLoaded", () => {
  const inputCity = document.getElementById("city-name");
  const getWeather = document.getElementById("fetch");
  const weatherInfo = document.getElementById("weather-info");
  const showCity = document.querySelector(".city");
  const showTemperature = document.querySelector(".temperature");
  const showDescription = document.querySelector(".description");
  const showError = document.querySelector("#error");
  // console.log(showCity);

  const API_KEY = "8e9b8ae1b4e404c6fa759657ff494dec"; // env variable

  getWeather.addEventListener("click", async () => {
    const city = inputCity.value.trim();
    if (city === "") return;

    //it may throw an error
    //server/database is always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showErrorMessage();
    }
  });

  async function fetchWeatherData(city) {
    //get weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    // console.log(response);
    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();
    return data;
  }

  function displayWeatherData(data) {
    //display weather data
    // console.log(data);
    const { name, main, weather } = data;
    showCity.innerHTML = name;
    showTemperature.innerHTML = main.temp;
    showDescription.innerHTML = weather[0].description;
    weatherInfo.classList.remove("hidden");
    showError.classList.add("hidden");
  }

  function showErrorMessage() {
    weatherInfo.classList.add("hidden");
    showError.classList.remove("hidden");
  }
});
