const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
		const units = '&limit=1';
		const darkskyURL = `https://api.darksky.net/forecast/${darkskyAPIKey}/` + `${latitude},${longitude}`;
		 // + `${units}`;
		request( {url: darkskyURL, json: true}, (error, response) => {
			if(error) {
				callback('Cannot connect', undefined);
			} else if(response.body.code === 400) {
				callback('Location invalid', undefined);
			} else {
				callback(undefined, response);
			}
		});
};

module.exports = forecast;