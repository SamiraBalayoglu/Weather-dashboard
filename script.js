const APIKey = '52d087c6b7f1634addb2c0b89e781f02';

let searchedCities = [];

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

            $('#weatherContainer').css('display', 'block');

            console.log(`Forecast data for the city=${cityName}&lat=${cityLat}&lon=${cityLon}`, data);

            const fiveDayForecast = weatherData.list.filter(function (data){
                return data.dt_txt.includes('12:00:00');
            });

            const todayExtractedWeatherData = getExtractedWeatherData(fiveDayForecast[0]);
            displayCurrentConditions(cityName, todayExtractedWeatherData);

            const day1ExtractedWeatherData = getExtractedWeatherData(fiveDayForecast[1]);
            displayForecast(day1ExtractedWeatherData, 1);

            const day2ExtractedWeatherData = getExtractedWeatherData(fiveDayForecast[2]);
            displayForecast(day2ExtractedWeatherData, 2);

            const day3ExtractedWeatherData = getExtractedWeatherData(fiveDayForecast[3]);
            displayForecast(day3ExtractedWeatherData, 3);

            const day4ExtractedWeatherData = getExtractedWeatherData(fiveDayForecast[4]);
            displayForecast(day4ExtractedWeatherData, 4);

            addToSearchHistory(cityName);
        });
    });
}

function addToSearchHistory(cityName) {
    if(!searchedCities.includes(cityName)) {
        searchedCities.push(cityName);
        displayHistory();
    } else {
        console.log(`City ${cityName} is already in the search history.`);
    }
}

function displayHistory() {
    let html = '<ul class="list-group">';
    for(let i=0; i<searchedCities.length;i++) {
        html += `<li class="list-group-item list-group-item-primary">${searchedCities[i]}</li>`;
    }
    html += `</ul>`;

    $('#history').html(html);
}

function getExtractedWeatherData(weatherData) {
    const temp = weatherData.main.temp;
    const humidity = weatherData.main.humidity;
    const wind = weatherData.wind.speed;
    const weatherDate = weatherData.dt_txt;
    const conditionIcon = weatherData.weather[0].icon;
    console.log(`temp and humidity: ${temp} and ${humidity} and ${wind}`);

    const extractedWeatherData = {
        weatherDate,
        temp,
        wind,
        humidity,
        conditionIcon
    };

    return extractedWeatherData;
}

function displayCurrentConditions(cityName, currentWeatherData) {
    const iconUrl = `https://openweathermap.org/img/wn/${currentWeatherData.conditionIcon}@2x.png`;
    $('#todayIcon').attr('src', iconUrl);
    const formattedDate = dayjs(currentWeatherData.weatherDate).format('D/MM/YYYY');
    $('#todayCityName').text(`${cityName} (${formattedDate})`);
    $('#todayTemp').text(`${currentWeatherData.temp}`);
    $('#todayWind').text(`${currentWeatherData.wind}`);
    $('#todayHumidity').text(`${currentWeatherData.humidity}`);
}

function displayForecast(extractedWeatherData, dayNumber) {
    const iconUrl = `https://openweathermap.org/img/wn/${extractedWeatherData.conditionIcon}@2x.png`;
    $(`#day${dayNumber}Icon`).attr('src', iconUrl);
    const formattedDate = dayjs(extractedWeatherData.weatherDate).format('D/MM/YYYY');
    $(`#day${dayNumber}Date`).text(`${formattedDate}`);
    $(`#day${dayNumber}Temp`).text(`${extractedWeatherData.temp}`);
    $(`#day${dayNumber}Wind`).text(`${extractedWeatherData.wind}`);
    $(`#day${dayNumber}Humidity`).text(`${extractedWeatherData.humidity}`);
}

$('#search-button').on('click', function(e) {
    e.preventDefault();

    const searchInput = $('#search-input').val().trim();
    console.log(searchInput);
    callApi(searchInput);
});