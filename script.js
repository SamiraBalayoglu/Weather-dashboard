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
    return data.dt_txt.includes('12');

});

console.log(fiveDayForecast);

})
})
};





function displayCurrentWeather(dCurrentWeather) {
    const iconUrl = ``
}














&('#search-button').on('click', funtion(e)){
    e.preventDefault();

    const search = $()
}