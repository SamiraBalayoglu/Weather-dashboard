const APIKey = '52d087c6b7f1634addb2c0b89e781f02';
let queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}';


fetch(queryURL)
.then(function(response){
    return response.json()
})
.then(function (data){
    console.log('geo data: ${data}');
    let latitude
});


const h3El = $ ('#card-title').text(`${data[0].name} (${dayjs().format('MMMM D, YYYY')})`);
fetch(forcastURL)
.then(function(response){
    return response.json()
})
.then.(function (data) {
    console.log (data);
    const displayCurrentWeather= data.list;
displayCurrentWeather(data.list[0]);

const fiveDayForecast = dCurrentWeather.filter(function (data){
    return data.dt_txt.includes('12:00:00');

});

console.log(fiveDayForecast);

for (let i=0; i < fiveDayForecast.length; i++) {
    const day = fiveDayForecast[i];
    const forecastCard = $('<div>').attr('class', 'card');
    const forecastBody = $('<div>').attr('class', 'card-body');
    const forecastTitle = $('<h5>').attr('class', 'card-title').text(dayjs(day.dt_txt).format('MM-YYYY-DD')); //Year Optional
    const forecastTemp = $('<p>').text ('Temp: ${day.main.temp} C`);
    const forecastWind = $('<p>').text ('Wind: ${day.wind.speed} kph`);
    const forecastHumidity = $('<p>').text ('Humidity: ${day.main.humidity} %`);

    $('#forecast').append(cardCOl);
    cardCol.append(forecastCard);
    forecastCard.append

}
})
})
};





function displayCurrentWeather(dCurrentWeather) {
    const iconUrl = `https://openweathermap.org${dCurrentWeather.weather.icon}.png` //TBC
    const icon =$('#icon').attr(scr)
}














&('#search-button').on('click', funtion(e){
    e.preventDefault();

    const search = $('#search-button').val().trim();
    $('#today').attr('class', 'mt-3');
    fetchWeather(search);
})


