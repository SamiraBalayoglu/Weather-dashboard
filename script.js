const APIKey = '52d087c6b7f1634addb2c0b89e781f02';

function callApi(cityName) {
    const cityGeoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKey}`;
    fetch(cityGeoUrl)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        // unknown city
        if (data.length == 0) {
            console.log(`No geo data for the city ${cityName}`);
            return;
        }
        const cityLat = data[0].lat;
        const cityLon = data[0].lon;

        console.log(`geo data: ${data}`);
        console.log(`geo lat: ${data[0].lat}, lon: ${data[0].lon}`);

        const cityWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}&appid=${APIKey}&units=metric`;

        fetch(cityWeatherUrl)
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function (weatherData) {
            // no forecast
            if (weatherData.list.length == 0) {
                console.log(`No forecast data for the city ${cityName}`);
                return;
            }

            console.log(`Forecast data for the city=${cityName}&lat=${cityLat}&lon=${cityLon}`, data);
            const temp = weatherData.list[0].main.temp;
            const humidity = weatherData.list[0].main.humidity;
            const wind = weatherData.list[0].wind.speed;
            const weatherDate = weatherData.list[0].dt_txt;
            const conditionIcon = weatherData.list[0].weather[0].icon;
            console.log(`temp and humidity: ${temp} and ${humidity} and ${wind}`);

            displayCurrentWeather({
                cityName,
                weatherDate,
                temp,
                wind,
                humidity,
                conditionIcon
            });
        });
    });
}

function displayCurrentWeather(currentWeatherData) {
    const iconUrl = `https://openweathermap.org/img/wn/${currentWeatherData.conditionIcon}@2x.png`;
    const icon = $('#icon').attr('src', iconUrl);
}

// const h3El = $ ('#card-title').text(`${data[0].name} (${dayjs().format('MMMM D, YYYY')})`);


// const fiveDayForecast = dCurrentWeather.filter(function (data){
//     return data.dt_txt.includes('12:00:00');
// });
















// console.log(fiveDayForecast);

// $('#forecast').empty();

// for (let i=0; i < fiveDayForecast.length; i++) {
// const day = fiveDayForecast[i];

// const forecastCard = $('<div>').attr('class', 'card');
// const forecastBody = $('<div>').attr('class', 'card-body');
// const forecastTitle = $('<h5>').attr('class', 'card-title').text(dayjs(day.dt_txt).format('MM-YYYY-DD')); //Year Optional
// const forecastTemp = $('<p>').text ('Temp: ${day.main.temp} C`);
// const forecastWind = $('<p>').text ('Wind: ${day.wind.speed} kph`);
// const forecastHumidity = $('<p>').text ('Humidity: ${day.main.humidity} %`);




// $('#forecast').append(cardCOl);
// cardCol.append(forecastCard);
// forecastCard.append(forecastCard);
// forecastBody.append(forecastTitle,forecastIcon,forecastTemp,forecastWind,forecastHumidity);

// // }
// // })
// // })
// // };


// // }


$('#search-button').on('click', function(e) {
    e.preventDefault();

    const searchInput = $('#search-input').val().trim();
    console.log(searchInput);
    callApi(searchInput);
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
