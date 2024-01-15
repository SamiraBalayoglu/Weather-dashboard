const APIKey = '52d087c6b7f1634addb2c0b89e781f02';
let queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}';


// fetch(queryURL)
// .then(function(response){
//     return response.json()
// })
// .then(function (data){
//     console.log('geo data: ${data}');
//     let latitude
// });


// const h3El = $ ('#card-title').text(`${data[0].name} (${dayjs().format('MMMM D, YYYY')})`);
// fetch(forcastURL)
// .then(function(response){
//     return response.json()
// })
// .then.(function (data) {
//     console.log (data);
//     const displayCurrentWeather= data.list;
// displayCurrentWeather(data.list[0]);

// const fiveDayForecast = dCurrentWeather.filter(function (data){
//     return data.dt_txt.includes('12:00:00');

// });

// console.log(fiveDayForecast);

// for (let i=0; i < fiveDayForecast.length; i++) {
//     const day = fiveDayForecast[i];
//     const forecastCard = $('<div>').attr('class', 'card');
//     const forecastBody = $('<div>').attr('class', 'card-body');
//     const forecastTitle = $('<h5>').attr('class', 'card-title').text(dayjs(day.dt_txt).format('MM-YYYY-DD')); //Year Optional
//     const forecastTemp = $('<p>').text ('Temp: ${day.main.temp} C`);
//     const forecastWind = $('<p>').text ('Wind: ${day.wind.speed} kph`);
//     const forecastHumidity = $('<p>').text ('Humidity: ${day.main.humidity} %`);


//     $('#forecast').append(cardCOl);
//     cardCol.append(forecastCard);
//     forecastCard.append

// }
// })
// })
// };


// function displayCurrentWeather(dCurrentWeather) {
//     const iconUrl = `https://openweathermap.org${dCurrentWeather.weather.icon}.png` //TBC
//     const icon =$('#icon').attr(scr)
// }


$('#search-button').on('click', function(e) {
    e.preventDefault();

    const searchInput = $('#search-input').val().trim();
    console.log(searchInput);
    // $('#today').attr('class', 'mt-3');
    // fetchWeather(search);
});


//FUNCTION getWeatherData(cityName):
// Make API request to OpenWeatherMap using cityName
// Use the API key to authenticate the request
// Parse the JSON response and return the weather data

//FUNCTION displayCurrentConditions(weatherData):
// Display current conditions on the webpage
//     PRINT "City: " + weatherData.cityName
//     PRINT "Date: " + weatherData.currentDate
//     PRINT "Icon: " + weatherData.weatherIcon
//     PRINT "Temperature: " + weatherData.temperature
//     PRINT "Humidity: " + weatherData.humidity
//     PRINT "Wind Speed: " + weatherData.windSpeed

//FUNCTION displayForecast(forecastData):
// Display 5-day forecast on the webpage
//     FOR i FROM 1 TO 5:
//         PRINT "Date: " + forecastData[i].date
//         PRINT "Icon: " + forecastData[i].weatherIcon
//         PRINT "Temperature: " + forecastData[i].temperature
//         PRINT "Humidity: " + forecastData[i].humidity

// FUNCTION addToSearchHistory(cityName):
// Add the cityName to the search history list
// Update the list in the local storage

// FUNCTION loadSearchHistory():
// Retrieve the search history from local storage
 // Display the list of cities on the webpage

// FUNCTION handleSearchButtonClick():
// Get the value entered in the search input field
// Call getWeatherData with the entered city name
// Call displayCurrentConditions and displayForecast with the obtained data
// Call addToSearchHistory to update the search history

// FUNCTION handleHistoryItemClick(cityName):
// Call getWeatherData with the selected city name
// Call displayCurrentConditions and displayForecast with the obtained data
