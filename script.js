// document.addEventListener('DOMContentLoaded', () => {
//     const getWeatherBtn = document.getElementById('get-weather-btn');
//     const locationInput = document.getElementById('location-input');
//     const currentWeatherEl = document.getElementById('current-weather');
//     const forecastEl = document.getElementById('forecast');
//     const mapEl = document.getElementById('map');
  
//     const API_KEY = '8l3tyDsmqx8ZCro0pTWz2Ot082iPDawb';
  
//     getWeatherBtn.addEventListener('click', () => {
//       const location = locationInput.value;
//       if (location) {
//         fetchWeather(location);
//         fetchForecast(location);
//       }
//     });
//     //https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric
//     function fetchWeather(location) {
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
//         .then(response => {
//           const weather = response.data;
//           displayCurrentWeather(weather);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
  
//     function fetchForecast(location) {
//       axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`)
//         .then(response => {
//           const forecast = response.data;
//           displayForecast(forecast);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     }
  
//     function displayCurrentWeather(weather) {
//       currentWeatherEl.innerHTML = `
//         <h2>${weather.name}</h2>
//         <p>Temperature: ${weather.main.temp} °C</p>
//         <p>Humidity: ${weather.main.humidity} %</p>
//         <p>Wind Speed: ${weather.wind.speed} m/s</p>
//         <p>Weather: ${weather.weather[0].description}</p>
//       `;
//     }
  
//     function displayForecast(forecast) {
//       forecastEl.innerHTML = '<h2>Forecast</h2>';
//       forecast.list.forEach(day => {
//         const forecastItem = document.createElement('div');
//         forecastItem.innerHTML = `
//           <p>${day.dt_txt}: ${day.main.temp} °C</p>
//         `;
//         forecastEl.appendChild(forecastItem);
//       });
//     }
  
//     const map = L.map(mapEl).setView([51.505, -0.09], 13);
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       maxZoom: 19,
//     }).addTo(map);
//   });
  


// document.addEventListener('DOMContentLoaded', () => {
//   const getWeatherBtn = document.getElementById('get-weather-btn');
//   const locationInput = document.getElementById('location-input');
//   const currentWeatherEl = document.getElementById('current-weather');
//   const forecastEl = document.getElementById('forecast');
//   const mapEl = document.getElementById('map');

//   const API_KEY = ' dbde5142815c4404879103819241506';  // Ensure this is a valid and active API key

//   getWeatherBtn.addEventListener('click', () => {
//     const location = locationInput.value;
//     if (location) {
//       fetchWeather(location);
//       fetchForecast(location);
//     }
//   });

//   function fetchWeather(location) {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
//       .then(response => {
//         const weather = response.data;
//         displayCurrentWeather(weather);
//       })
//       .catch(error => {
//         console.error(error);  // Log the error to the console for debugging
//       });
//   }

//   function fetchForecast(location) {
//     axios.get(`http://api.weatherapi.com/v1/current.json?key=dbde5142815c4404879103819241506&q=${location}`)
//       .then(response => {
//         const forecast = response.data;
//         console.log(forecast);
//         displayForecast(forecast);
//       })
//       .catch(error => {
//         console.error(error);  // Log the error to the console for debugging
//       });
//   }

//   function displayCurrentWeather(weather) {
//     currentWeatherEl.innerHTML = `
//       <h2>${weather.name}</h2>
//       <p>Temperature: ${weather.main.temp} °C</p>
//       <p>Humidity: ${weather.main.humidity} %</p>
//       <p>Wind Speed: ${weather.wind.speed} m/s</p>
//       <p>Weather: ${weather.weather[0].description}</p>
//     `;
//   }

//   function displayForecast(forecast) {
//     forecastEl.innerHTML = '<h2>Forecast</h2>';
//     forecast.list.forEach(day => {
//       const forecastItem = document.createElement('div');
//       forecastItem.innerHTML = `
//         <p>${day.dt_txt}: ${day.main.temp} °C</p>
//       `;
//       forecastEl.appendChild(forecastItem);
//     });
//   }

//   const map = L.map(mapEl).setView([51.505, -0.09], 13);
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//   }).addTo(map);
// });

// // http://api.weatherapi.com/v1/current.json?key=dbde5142815c4404879103819241506&q=bulk



document.addEventListener('DOMContentLoaded', () => {
  const getWeatherBtn = document.getElementById('get-weather-btn');
  const locationInput = document.getElementById('location-input');
  const currentWeatherEl = document.getElementById('current-weather');
  const forecastEl = document.getElementById('forecast');
  const mapEl = document.getElementById('map');

  const API_KEY = 'dbde5142815c4404879103819241506';  // Ensure this is a valid and active API key

  getWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
      fetchWeather(location);
      fetchForecast(location);
    }
  });

  function fetchWeather(location) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
      .then(response => {
        const weather = response.data;
        displayCurrentWeather(weather);
      })
      .catch(error => {
        console.error(error);  // Log the error to the console for debugging
      });
  }

  function fetchForecast(location) {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=5`)
      .then(response => {
        const forecast = response.data;
        console.log(forecast);
        displayForecast(forecast);
      })
      .catch(error => {
        console.error(error);  // Log the error to the console for debugging
      });
  }

  function displayCurrentWeather(weather) {
    currentWeatherEl.innerHTML = `
      <h2>${weather.name}</h2>
      <p>Temperature: ${weather.main.temp} °C</p>
      <p>Humidity: ${weather.main.humidity} %</p>
      <p>Wind Speed: ${weather.wind.speed} m/s</p>
      <p>Weather: ${weather.weather[0].description}</p>
    `;
  }

  function displayForecast(forecast) {
    forecastEl.innerHTML = '<h2>Forecast</h2>';
    forecast.forecast.forecastday.forEach(day => {
      const forecastItem = document.createElement('div');
      forecastItem.innerHTML = `
        <p>${day.date}: ${day.day.avgtemp_c} °C</p>
      `;
      forecastEl.appendChild(forecastItem);
    });
  }

  const map = L.map(mapEl).setView([51.505, -0.09], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
});
