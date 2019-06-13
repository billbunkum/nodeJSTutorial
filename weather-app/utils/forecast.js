const request = require('request');

// Lexington 38.047989,-84.501640

const forecast = (latitude, longitude, callback) => {
	const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
		// const units = '&limit=1';
		const darkskyURL = `https://api.darksky.net/forecast/${darkskyAPIKey}/` + `${latitude},${longitude}`;
		 // + `${units}`;
		request( {url: darkskyURL, json: true}, (error, { body }) => {
			// RETURNS response.body.code...
			if(error) {
				callback('Cannot connect', undefined);
			} else if(body.code === 400) {
				callback('Location invalid', undefined);
			} else {
				callback(undefined, body);
			}
		});
};

module.exports = forecast;
