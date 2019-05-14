const request = require('request');
const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
// 37.8267,-122.4233

let getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/${darkskyAPIKey}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, weatherResults = {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
			// console.log(body.currently.temperature);
		}	else {
			callback('Unable to connect to Forecast.io server');
			// console.log('Unable to connect to Forecast.io server');
		}
	});
};
module.exports = {
	getWeather
};