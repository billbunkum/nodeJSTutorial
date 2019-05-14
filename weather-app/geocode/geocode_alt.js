const request = require('request');
const key = 'vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2';
const darkskyAPIKey = '297842be681beeba3e18b115c8bab523';
// DARK SKY DOCS
// https://api.darksky.net/forecast/297842be681beeba3e18b115c8bab523/37.8267,-122.4233
// https://api.darksky.net/forecast/<apikey>/<lat>,<long>
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

let getWeather = (address, callback) => {
	getLocation(address, (errorMessage, status400, body) => {
		if (errorMessage) {
			console.log(errorMessage);
		} else if (status400) {
			console.log(status400);
		} else {
			let latitude = body.latitude;
			let longitude = body.longitude;
			request({
				json: true,
				url: `https://api.darksky.net/forecast/${darkskyAPIKey}/${latitude},${longitude}`
			}, (error, response, body) => {
					if (error) {
						callback(error);
					} else {
						let currentWeather = body.currently.summary;
						callback(undefined, currentWeather);
					}
				}
			);
		}
	});
};

let getLocation = (address, callback) => {	
	let location = encodeURIComponent(address);
	request({
		json: true,
		url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${location}`
		}, (error, response, body) => {
			// console.log(body.info.statuscode);
			if (error) {
				// console.log(`System error: ${error}`);
				callback(`System error: ${error}`);
			} else if (body.info.statuscode === 400) {
				let statuscode = body.info.statuscode;
				// console.log('Cannot find location');
				let code400 = statuscode;
				callback(undefined, code400, undefined);
				} else {
					let theGoods = body.results[0];
					// console.log(`Result 1: ${theGoods}`);
					callback(undefined, undefined, {
						address: theGoods.providedLocation.location,
						latitude: theGoods.locations[0].latLng.lat,
						longitude: theGoods.locations[0].latLng.lng
					});
				}
			}
	)
};

module.exports = {
	getLocation,
	getWeather
};

// request({
// 	json: true,
// 	url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=1301%20lombard%20street%20philadelphia`
// }, (error, response, body) => {
// 	// PRETTY PRINTING USING `JSON.stringify(<jsonObject>, <mostly useless function>, <# of spaces to indent>)
// 	// console.log(JSON.stringify(response, undefined, 2));
// 	let theGoods = body.results[0].locations[0].latLng;
// 	console.log(
// 		// JSON.stringify(theGoods, undefined, 2)
// 		`Latitude: ${theGoods.lat}`
// 	);
// 	console.log(`Longitude: ${theGoods.lng}`);
// });

// http://www.mapquestapi.com/geocoding/v1/address?key=vKABhGDJuEVQX4pVs5rCVPrGlYd5wKn2&location=1301%20lombard%20street%20philadelphia