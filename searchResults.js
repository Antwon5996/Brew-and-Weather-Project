$(document).foundation();

var res = localStorage.getItem("openBreweryDBResults");
var resParse = JSON.parse(res);
console.log(resParse);

var we = localStorage.getItem("openWeatherMapResults");
var weatherParse = JSON.parse(we);
console.log(weatherParse);

function appendWeather() {
    console.log(weatherParse.weather[0].icon);
    var tempEl = "http://openweathermap.org/img/wn/"
    var iconEl = JSON.stringify(weatherParse.weather[0].icon)
    var iconUrl = tempEl + iconEl;
}
appendWeather();