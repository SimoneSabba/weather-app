import axios from 'axios'

/*
* CONSTANTS
*/
const API_KEY = '6d7e94aba2eccbac60d5b05bd8d3951e';
const endpoint = 'http://api.openweathermap.org/data/2.5/';
const forecast_path = 'forecast/daily'
const weather_path = 'weather'

/*
* Build query string parameters
*/
function prepareQueryParams(params) {
	return '?q=' + params.city + '&type=accurate&APPID=' + API_KEY + '&cnt=5';
}

/*
* Prepare base url
*/
function prepareBaseUrl(path, city) {
	return endpoint + path;
}

/*
* Prepare the final url with query string parameters
*/
function getUrl(path, city) {
	return prepareBaseUrl(forecast_path) + prepareQueryParams({city: city});
}

/*
* @name getForecast
* @param city name, state or zip code
* @return 5 days forecast
*/
function getForecast(city) {
	var url = getUrl(forecast_path, city);
	return axios.get(url);
}

/*
* @name getWeather
* @param city name, state or zip code
* @return current weather
*/
function getWeather(city) {
	var url = getUrl(forecast_path, city);
	return axios.get(url);
}

/*
* API EXPORTS
*/
var api = {
	getForecast: getForecast,
	getWeather: getWeather
};

export default api;